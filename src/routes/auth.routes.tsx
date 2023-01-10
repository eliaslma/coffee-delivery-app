import { SignIn } from "@myApp/screens/SignIn";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

export function AuthRoutes(){

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SignIn}/>
        </Stack.Navigator>
      
    )
}