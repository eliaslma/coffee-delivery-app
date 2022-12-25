import React, { useState } from "react";
import { Container, Modal, Header, InfoContainer, Infos, Title, Subtitle, CloseButton } from "./styles";
import { X } from 'phosphor-react-native'
import { api } from "@myApp/services/api";

import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { InputForm } from "../Form/InputForm";
import { GetLocationButton } from "../Form/GetLocationButton";


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
    
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });

      async function handleGetLocation(data: FormData){

        try{
            const response = await api.get(`${data.zipcode}/json`)

            if(response.data['erro']) { 
                setErrorResponse({type: 'cep', message: 'CEP Inválido'})
            }else{
                const address = `${response.data.localidade}, ${response.data.uf}`
                handleUpdateLocation(address)
                handleCloseModal()
                reset()
            }

            }catch(error) {
                console.error(error);
            }
          
    }

    return (
        <Container>
            <Modal>
                <InfoContainer>
                    <Header>
                        <Infos>
                            <Title>Onde você está?</Title>
                            <Subtitle>Digite um CEP para ter acesso aos produtos e ofertas da sua região.</Subtitle>
                        </Infos>
                        <CloseButton onPress={handleCloseModal}>
                            <X size={24} weight="bold" color="white"/>
                        </CloseButton>
                    </Header>
                    <InputForm 
                        control={control} 
                        name="zipcode" 
                        placeholder="CEP" 
                        autoCorrect={false} 
                        keyboardType={'numeric'}
                        error={errors.zipcode || errorResponse}
                    />
                    <GetLocationButton onPress={handleSubmit(handleGetLocation)}/>
                </InfoContainer>
            </Modal>
            
        </Container>   
    )
}