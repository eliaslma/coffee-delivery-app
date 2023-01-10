import React, { useState } from "react";
import AppleIcon from '../../assets/apple-icon.svg';
import GoogleIcon from '../../assets/google-icon.svg';
import CoffeeDeliveryIcon from '../../assets/Logo.svg'
import { useTheme } from "styled-components";
import { Platform } from "react-native";


import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Alert } from "react-native";

import { useAuth } from "@myApp/hooks/auth";
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

    const {signInWithGoogle,signInWithApple} = useAuth();
    const [isLoading, setIsLoading ] = useState(false)
    const theme = useTheme()

    async function handleSignInWithGoogle(){
        try{
            setIsLoading(true)
            await signInWithGoogle()
        }catch(error){
            Alert.alert('Não foi possível conectar a conta Google!')
            console.log(error)
        }
        finally{
            setIsLoading(false)
        }
    }

    async function handleSignInWithApple(){
        try{
            setIsLoading(true)
            await signInWithApple()
        }catch(error){
            console.log(error)
        }
        finally{
            setIsLoading(false)
        }
    }

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
                    <SignInSocialButton title="Entrar com Google" svg={GoogleIcon} onPress={handleSignInWithGoogle}/>
                    {Platform.OS === 'ios' && <SignInSocialButton title="Entrar com Apple" svg={AppleIcon} onPress={handleSignInWithApple}/>}
                </FooterWrapper>
                { isLoading && <ActivityIndicator color={theme.colors.purple_light} size="large" style={{marginTop: 16}}/>}
            </Footer>
        </Container>
    );
}