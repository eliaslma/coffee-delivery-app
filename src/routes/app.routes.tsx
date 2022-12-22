import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "@myApp/screens/Home"
import { Checkout } from "@myApp/screens/Checkout"
import { propsNavigationStack } from "./Models"

export function AppRoutes(){

    const Stack = createNativeStackNavigator<propsNavigationStack>()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Checkout" component={Checkout}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}