import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isIphoneX, getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { CaretLeft } from "phosphor-react-native";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator, Alert } from "react-native";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react-native'
import uuid from 'react-native-uuid';

import theme from "@myApp/global/styles/theme";
import { InputFormAddress } from "@myApp/components/AddressForm/InputForm";
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
import { useAuth } from "@myApp/hooks/Auth";

export interface DeliveryAddress {
    street?: string;
    number?: string;
    complement?: string;
    district?: string;
    city?: string;
    uf?: string;
}

const schema = Yup.object().shape({
    street: Yup.string().required(),
    number: Yup.string().required(),
    complement: Yup.string(),
    district: Yup.string().required(),
    city: Yup.string().required(),
    uf: Yup.string().required(),
});

export function Payment({navigation, route}){

    const [paymentMethodSelected,setPaymentMethodSelect] = useState('Cartão de Crédito');
    const [deliveryAddress, setDeliveryAddress ] = useState<DeliveryAddress>({});
    const [dataRead,setDataRead] = useState(false);
    const coffeeList = route.params['data'];
    const totalCartPrice = route.params['totalCartPrice'];
    const { user } = useAuth();
    
    async function getDeliveryAddress(){

        const dataKey = `@coffeedelivery:location_user:${user.id}`;
        const response = await AsyncStorage.getItem(dataKey);

        if(response !== null){
            let data = JSON.parse(response)
            setDeliveryAddress({ 
                street: `${data.logradouro}`,
                complement: `${data.complemento}`,
                district: `${data.bairro}`,
                city: `${data.localidade}`,
                uf: `${data.uf}`
            })
            setDataRead(true)
        }
        else{
            setDataRead(true)
        }
    }    
    
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    async function handleConfirmOrder(data: DeliveryAddress){

        navigation.navigate("Success", { data: data, payment: paymentMethodSelected});

        const ordered = {
            id: uuid.v4(),
            street: data.street,
            number: data.number,
            complement: data.complement,
            district: data.district,
            city: data.city,
            uf: data.uf,
            coffeelist: coffeeList,
            typePayment: paymentMethodSelected,
            totalCartPrice: totalCartPrice,
            date: new Date()
        }
        
        try{
            const dataKey = `@coffeedelivery:ordereds_user:${user.id}`;
            const response = await AsyncStorage.getItem(dataKey);
            const readData = response ? JSON.parse(response) : [];

            const dataFormatted = [
                ...readData,
                ordered
            ]

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
            

        }catch(error){
            console.log(error)
            Alert.alert('Não foi possível concluir o pedido.')
        }
    }

    useEffect(() => {
        getDeliveryAddress()
    },[])

    return(
        <Container>
            <Header style={ isIphoneX() ? {marginTop: getStatusBarHeight() + 16} : { marginTop: 16}}>
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
                        {!dataRead ? <ActivityIndicator color={theme.colors.purple} size="small"/> :
                        <>
                            <InputFormAddress control={control}
                                defaultValue={deliveryAddress.street} 
                                name="street" 
                                placeholder="Rua"
                                error={errors.street}
                                autoFocus
                            />
                            <InputFormAddress control={control}
                                defaultValue={''} 
                                name="number" 
                                placeholder="Número"
                                keyboardType={'numeric'}
                                maxLength={5}
                                error={errors.number}
                            />
                            <InputFormAddress control={control}
                                defaultValue={''} 
                                name="complement" 
                                placeholder="Complemento (Opcional)" 
                                error={errors.complement}
                                maxLength={50}
                            />
                            <InputFormAddress control={control}
                                defaultValue={deliveryAddress.district} 
                                name="district" 
                                placeholder="Bairro" 
                                error={errors.district}
                                maxLength={50}
                            />
                            <InputFormAddress control={control}
                                defaultValue={deliveryAddress.city} 
                                name="city" 
                                placeholder="Cidade" 
                                error={errors.city}
                                maxLength={50}
                            />
                            <InputFormAddress control={control}
                                defaultValue={deliveryAddress.uf} 
                                name="uf" 
                                placeholder="UF"
                                error={errors.uf}
                                maxLength={50}
                            />
                        </>
                    }
                        <PaymentWrapper>
                            <CurrencyDollar size={22} color={theme.colors.purple}/>
                            <Infos>
                                <TitleAddress>Pagamento</TitleAddress>
                                <SubtitleAddress>O pagamento é feito na entrega. Escolha a forma que deseja pagar</SubtitleAddress>
                            </Infos>
                        </PaymentWrapper>

                        <SelectPayment onPress={() => setPaymentMethodSelect('Cartão de Crédito')} isSelected={ paymentMethodSelected === 'Cartão de Crédito'}>
                            <CreditCard size={16} color={theme.colors.purple}/>
                            <SelectPaymentTitle>CARTÃO DE CRÉDITO</SelectPaymentTitle>
                        </SelectPayment>

                        <SelectPayment onPress={() => setPaymentMethodSelect('Cartão de Débito')} isSelected={ paymentMethodSelected === 'Cartão de Débito'}>
                            <Bank size={16} color={theme.colors.purple}/>
                            <SelectPaymentTitle>CARTÃO DE DÉBITO</SelectPaymentTitle>
                        </SelectPayment>

                        <SelectPayment onPress={() => setPaymentMethodSelect('Dinheiro')} isSelected={ paymentMethodSelected === 'Dinheiro'}>
                            <Money size={16} color={theme.colors.purple}/>
                            <SelectPaymentTitle>DINHEIRO</SelectPaymentTitle>
                        </SelectPayment>
                    </Form>
                </ScrollView>
            </KeyboardAvoidingView>
            <Footer style={isIphoneX() ? {paddingBottom: getBottomSpace()} : {paddingBottom: 16}}>
                <CheckoutButton name="CONFIRMAR PEDIDO" handlePress={handleSubmit(handleConfirmOrder)}/>
            </Footer>
        </Container>        
    );

}