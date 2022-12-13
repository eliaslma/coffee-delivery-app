import React from 'react';
import { Home } from '@myApp/screens/Home';
import { ThemeProvider } from 'styled-components';
import theme from '@myApp/global/styles/theme';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { Loader } from '@myApp/components/Loader';

import {
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import {
    Baloo2_700Bold,
    Baloo2_800ExtraBold
} from '@expo-google-fonts/baloo-2'

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
    Baloo2_800ExtraBold
  });

  if(!fontsLoaded){
    return <Loader/>
  }
  else{

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );

  }

}


