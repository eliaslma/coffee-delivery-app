import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import AppleIcon from '../../assets/apple-icon.svg';
import GoogleIcon from '../../assets/google-icon.svg';
import CoffeeDeliveryIcon from '../../assets/Logo.svg'
import { StatusBar } from "expo-status-bar";

import { SignInSocialButton } from "@myApp/components/SignInSocialButton";
import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignTitle,
    Footer,
    FooterWrapper
} from './styles'

export function SignIn(){

    return(
        <Container>
            <StatusBar style="auto"/>
            <Header>
                <TitleWrapper>
                    <CoffeeDeliveryIcon width={RFValue(128)} height={RFValue(68)}/>
                    <Title>
                        Encontre o café {'\n'}
                        perfeito para qualquer {'\n'}
                        hora do dia
                    </Title>
                    <SignTitle>
                        Faça seu login com {'\n'}
                        uma das contas abaixo
                    </SignTitle>
                </TitleWrapper>
            </Header>
            <Footer>
                <FooterWrapper>
                    <SignInSocialButton title="Entrar com Google" svg={GoogleIcon}/>
                    <SignInSocialButton title="Entrar com Apple" svg={AppleIcon}/>
                </FooterWrapper>
            </Footer>
        </Container>
    );
}