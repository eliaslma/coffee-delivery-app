import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { X } from 'phosphor-react-native'
import { api } from "@myApp/services/api";
import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import theme from "@myApp/global/styles/theme";
import { ActivityIndicator } from "react-native";
import { InputForm } from "../LocationForm/InputForm";
import { GetLocationButton } from "../LocationForm/GetLocationButton";
import { Container, Modal, Header, InfoContainer, Infos, Title, Subtitle, CloseButton } from "./styles";
import { useAuth } from "@myApp/hooks/auth";




type Error = FieldError;
interface FormData {
    zipcode: Number;
}

const schema = Yup.object().shape({
    zipcode: Yup.string()
    .matches(/^[0-9]+$/, "Informe um valor numérico")
    .min(8, 'Deve ter exatamente 8 dígitos')
    .max(8, '')
    .required('Informe um CEP')
});


export function LocationModal({ handleCloseModal, handleUpdateLocation }){

    const [errorResponse,setErrorResponse] = useState<Error>();
    const [loaderActive, setLoaderActive] = useState(false);
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const { user } = useAuth();

      async function handleGetLocation(data: FormData){

        setLoaderActive(true)

        try{
            const dataKey = `@coffeedelivery:location_user:${user.id}`;
            const response = await api.get(`${data.zipcode}/json`);

            if(response.data['erro']) {
                setLoaderActive(false) 
                setErrorResponse({type: 'cep', message: 'CEP Inválido'});
            }else{
                await AsyncStorage.setItem(dataKey, JSON.stringify(response.data));
                const address = `${response.data.localidade}, ${response.data.uf}`
                handleCloseModal()
                handleUpdateLocation(address)
            }

            }catch(error) {
                setLoaderActive(false)
                setErrorResponse({type: 'connection', message: `${error}`});
                reset();
            }
          
    }

    return (
        <Container>
            <Modal>
                <InfoContainer>
                    <Header>
                        <Infos>
                            <Title>Onde você está?</Title>
                            <Subtitle>Busque sua localização para ter acesso aos produtos e ofertas da região.</Subtitle>
                        </Infos>
                        <CloseButton onPress={handleCloseModal}>
                            <X size={24} weight="bold" color="white"/>
                        </CloseButton>
                    </Header>
                    {loaderActive ? <ActivityIndicator color={theme.colors.purple} size="large"/> :
                    <InputForm
                        control={control} 
                        name="zipcode" 
                        placeholder="Digite o CEP" 
                        autoCorrect={false} 
                        keyboardType={'numeric'}
                        error={errors.zipcode || errorResponse}
                    />
                    }
                    <GetLocationButton onPress={handleSubmit(handleGetLocation)}/>
                </InfoContainer>
            </Modal>
            
        </Container>   
    )
}