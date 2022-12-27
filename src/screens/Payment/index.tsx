import React from "react";
import { CaretLeft } from "phosphor-react-native";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { InputFormAddress } from "@myApp/components/AddressForm/InputForm";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { MapPinLine } from 'phosphor-react-native'


import { 
    Container, 
    Header, 
    Title, 
    BackButton, 
    Form,
    AddressWrapper,
    Infos,
    TitleAddress,
    SubtitleAddress,
}from './styles'
import theme from "@myApp/global/styles/theme";


const schema = Yup.object().shape({
    
});

export function Payment({navigation}){

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });

    return(
        <Container>
            <Header>
                <BackButton onPress={() => navigation.goBack()}>
                    <CaretLeft size={24} weight="bold"/>
                </BackButton>
                <Title>Complete seu pedido</Title>
            </Header>
            <AddressWrapper>
                <MapPinLine size={22} color={theme.colors.yellow_dark}/>
                <Infos>
                    <TitleAddress>Endereço de Entrega</TitleAddress>
                    <SubtitleAddress>Informe o endereço onde deseja receber seu pedido</SubtitleAddress>
                </Infos>
            </AddressWrapper>
            <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Form>
                        <InputFormAddress control={control}
                            defaultValue={''} 
                            name="Street" 
                            placeholder="Rua"
                            error={errors}
                            autoFocus
                        />
                        <InputFormAddress control={control}
                            defaultValue={''} 
                            name="Number" 
                            placeholder="Número"
                            keyboardType={'numeric'}
                            error={errors}
                        />
                        <InputFormAddress control={control}
                            defaultValue={''} 
                            name="Complement" 
                            placeholder="Complemento" 
                            error={errors}
                        />
                        <InputFormAddress control={control}
                            defaultValue={''} 
                            name="district" 
                            placeholder="Bairro" 
                            error={errors}
                        />
                        <InputFormAddress control={control}
                            defaultValue={''} 
                            name="city" 
                            placeholder="Cidade" 
                            error={errors}
                        />
                        <InputFormAddress control={control}
                            defaultValue={''} 
                            name="estate" 
                            placeholder="UF"
                            error={errors}
                        />
                    </Form>
                </ScrollView>
            </KeyboardAvoidingView>    
        </Container>        
    );

}