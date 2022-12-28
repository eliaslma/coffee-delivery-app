import React, { useState } from "react";
import { CaretLeft } from "phosphor-react-native";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { InputFormAddress } from "@myApp/components/AddressForm/InputForm";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react-native'


import { 
    Container, 
    Header, 
    Title, 
    BackButton, 
    Form,
    AddressWrapper,
    PaymentWrapper,
    Infos,
    TitleAddress,
    SubtitleAddress,
    SelectPayment,
    SelectPaymentTitle,
}from './styles'
import theme from "@myApp/global/styles/theme";



const schema = Yup.object().shape({
    
});

export function Payment({navigation}){

    const [paymentMethodSelected,setPaymentMethodSelect] = useState('credit')

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
                        <PaymentWrapper>
                            <CurrencyDollar size={22} color={theme.colors.purple}/>
                            <Infos>
                                <TitleAddress>Pagamento</TitleAddress>
                                <SubtitleAddress>O pagamento é feito na entrega. Escolha a forma que deseja pagar</SubtitleAddress>
                            </Infos>
                        </PaymentWrapper>

                        <SelectPayment onPress={() => setPaymentMethodSelect('credit')} isSelected={ paymentMethodSelected === 'credit'}>
                            <CreditCard size={16} color={theme.colors.purple}/>
                            <SelectPaymentTitle>CARTÃO DE CRÉDITO</SelectPaymentTitle>
                        </SelectPayment>

                        <SelectPayment onPress={() => setPaymentMethodSelect('debit')} isSelected={ paymentMethodSelected === 'debit'}>
                            <Bank size={16} color={theme.colors.purple}/>
                            <SelectPaymentTitle>CARTÃO DE DÉBITO</SelectPaymentTitle>
                        </SelectPayment>

                        <SelectPayment onPress={() => setPaymentMethodSelect('money')} isSelected={ paymentMethodSelected === 'money'}>
                            <Money size={16} color={theme.colors.purple}/>
                            <SelectPaymentTitle>DINHEIRO</SelectPaymentTitle>
                        </SelectPayment>

                    </Form>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>        
    );

}