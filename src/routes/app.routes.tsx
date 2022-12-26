import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "@myApp/screens/Home"
import { Checkout } from "@myApp/screens/Checkout"
import { propsNavigationStack } from "./Models"
import { createDrawerNavigator } from "@react-navigation/drawer"


function Root(){
    const Drawer = createDrawerNavigator()
    return(
        <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}}>
            <Drawer.Screen name="Home" component={Home}/>
        </Drawer.Navigator>
    );
}

export function AppRoutes(){

    const Stack = createNativeStackNavigator<propsNavigationStack>()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Root" component={Root} />
                <Stack.Screen name="Checkout" component={Checkout}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}