import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isIphoneX, getBottomSpace } from "react-native-iphone-x-helper";
import { CaretLeft } from "phosphor-react-native";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { InputFormAddress } from "@myApp/components/AddressForm/InputForm";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react-native'
import theme from "@myApp/global/styles/theme";

import { CheckoutButton } from "@myApp/components/Buttons/CheckoutButton";
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
    Footer
}from './styles'

interface DeliveryAddress {
    street?: string;
    number?: number;
    complement?: string;
    district?: string;
    city?: string;
    uf?: string;
}

const schema = Yup.object().shape({
    
});

export function Payment({navigation, route}){

    const [paymentMethodSelected,setPaymentMethodSelect] = useState('credit')
    const [deliveryAddress, setDeliveryAddres ] = useState<DeliveryAddress>({})

    async function getDeliveryAddress() {

        const dataKey = '@coffeedelivery:location'
        const response = await AsyncStorage.getItem(dataKey)

        if(response !== null){
            let data = JSON.parse(response)
            setDeliveryAddres({ 
                street: `${data.logradouro}`,
                district: `${data.bairro}`,
                city: `${data.localidade}`,
                uf: `${data.uf}`,
                complement: `${data.complemento}`
            })
        }
    }    
    
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });

    useEffect(() => {
        getDeliveryAddress()
    },[])

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
                            defaultValue={deliveryAddress.street} 
                            name="street" 
                            placeholder="Rua"
                            error={errors}
                            autoFocus
                        />
                        <InputFormAddress control={control}
                            defaultValue={''} 
                            name="number" 
                            placeholder="Número"
                            keyboardType={'numeric'}
                            error={errors}
                        />
                        <InputFormAddress control={control}
                            defaultValue={''} 
                            name="complement" 
                            placeholder="Complemento (Opcional)" 
                            error={errors}
                        />
                        <InputFormAddress control={control}
                            defaultValue={deliveryAddress.district} 
                            name="district" 
                            placeholder="Bairro" 
                            error={errors}
                        />
                        <InputFormAddress control={control}
                            defaultValue={deliveryAddress.city} 
                            name="city" 
                            placeholder="Cidade" 
                            error={errors}
                        />
                        <InputFormAddress control={control}
                            defaultValue={deliveryAddress.uf} 
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
            <Footer style={isIphoneX() ? {paddingBottom: getBottomSpace()} : {paddingBottom: 16}}>
                <CheckoutButton name="CONFIRMAR PEDIDO" handlePress={() => {}}/>
            </Footer>
        </Container>        
    );

}