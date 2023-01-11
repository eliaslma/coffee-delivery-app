import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@myApp/global/styles/theme';
import { useFonts } from 'expo-font';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { Loader } from '@myApp/components/Loader';
import { Routes } from '@myApp/routes';
import { AuthProvider, useAuth } from '@myApp/hooks/Auth';

import {
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import {
    Baloo2_400Regular,
    Baloo2_700Bold,
    Baloo2_800ExtraBold
} from '@expo-google-fonts/baloo-2'


export default function App() {

    const { userStorageLoading } = useAuth()

    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        Baloo2_400Regular,
        Baloo2_700Bold,
        Baloo2_800ExtraBold
    });

    if(!fontsLoaded || userStorageLoading){
        return <Loader/>
    }
    else{
        return (
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <Routes/>
                </AuthProvider>
            </ThemeProvider>
        );
    }
}


