import { SignIn } from "@myApp/screens/SignIn";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";
import React from "react";

export function AuthRoutes(){

    const Stack = createNativeStackNavigator();
    const theme = useTheme()

    return(
        <Stack.Navigator screenOptions={{headerShown: false, statusBarColor: theme.colors.purple}}>
            <Stack.Screen name="SignIn" component={SignIn}/>
        </Stack.Navigator>
      
    )
}