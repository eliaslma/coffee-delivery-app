import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Lootie from 'lottie-react-native';
import { MapPin, Timer, CurrencyDollar } from "phosphor-react-native";
import theme from "@myApp/global/styles/theme";
import { isIphoneX, getBottomSpace } from "react-native-iphone-x-helper";


import { CheckoutButton } from "@myApp/components/Buttons/CheckoutButton";
import { 
    Container, 
    AnimationContainer, 
    OrderContainer, 
    Title, 
    Subtitle, 
    OrderInfo,
    Icon,
    Local,
    Time,
    Payment,
    InfoContainer,
    Info,
    InfoFeatured,
    Footer

} from "./styles";

export function Success({navigation, route}){
    const address = route.params['data']
    const payment = route.params['payment']

    function handleNavHome(){
        navigation.navigate('Home')
    }

    return(
        <Container>
            <AnimationContainer>
                <Lootie autoPlay style={{ width: 492, height: 293}} loop source={require('../../assets/Bike.json')}/>
            </AnimationContainer>
            
                <OrderContainer>

                    <Title>Uhu! Pedido confirmado!</Title>
                    <Subtitle>Agora é só aguardar que {'\n'}logo o café chegará até você</Subtitle>
                    <LinearGradient start={[0, 0.5]}
                        end={[1, 0.5]}
                        colors={['#DBAC2C', '#8047F8']}
                        style={{borderRadius: 16, padding: 1, marginTop: 16}}>
                    <OrderInfo>
                        <Local>
                            <Icon type="location">
                                <MapPin weight="fill" size={16} color={theme.colors.white}/>
                            </Icon>
                            <InfoContainer>
                                <InfoFeatured>{address.street}</InfoFeatured>
                                <Info>{address.district} - {address.city}, {address.uf}</Info>
                            </InfoContainer>
                        </Local>
                        <Time>
                            <Icon type="timer">
                                <Timer weight="fill" size={16} color={theme.colors.white}/>
                            </Icon>
                            <InfoContainer>
                                <Info>Previsão de entrega</Info>
                                <InfoFeatured>20 min - 30 min</InfoFeatured>
                            </InfoContainer>
                        </Time>
                        <Payment>
                            <Icon type="payment">
                                <CurrencyDollar weight="fill" size={16} color={theme.colors.white}/>
                            </Icon>
                            <InfoContainer>
                                <Info>Pagamento na entrega</Info>
                                <InfoFeatured>{payment}</InfoFeatured>
                            </InfoContainer>
                        </Payment>
                    </OrderInfo>
                    </LinearGradient>
                </OrderContainer>
                <Footer style={isIphoneX() ? {paddingBottom: getBottomSpace()} : {paddingBottom: 16}}>
                    <CheckoutButton name="RETORNAR AO INÍCIO" handlePress={handleNavHome}/>
                </Footer>
        </Container>
    );

}