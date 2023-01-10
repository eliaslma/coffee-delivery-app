import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "@myApp/screens/Home"
import { Checkout } from "@myApp/screens/Checkout"
import { propsNavigationStack } from "./Models"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { CustomDrawer } from "@myApp/components/CustomDrawer"
import { Coffee, HouseLine } from "phosphor-react-native"
import { Ordered } from "@myApp/screens/Ordered"
import { Payment } from "@myApp/screens/Payment"
import { Success } from "@myApp/screens/Success"
import { useTheme } from "styled-components"



function SideMenu(){

    const Drawer = createDrawerNavigator()
    
    return(
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props}/> }
            initialRouteName="Home" 
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: {marginLeft: -25, fontFamily: 'Baloo2_700Bold', fontSize: 16},
                drawerActiveBackgroundColor: '#8047F8',
                drawerActiveTintColor: 'white',
            }} 
            backBehavior={"initialRoute"}>
            <Drawer.Screen name="Home" component={Home} 
                options={{ 
                    title: 'Ínicio', 
                    drawerIcon: ({color}) => <HouseLine size={28} weight="bold" color={color} />,    
                }}/>
            <Drawer.Screen name="Ordered" component={Ordered}
                options={{ 
                    title: 'Pedidos',
                    drawerIcon: ({color}) => <Coffee size={28} weight="bold" color={color} />,
                }}/>
        </Drawer.Navigator>
    );
}

export function AppRoutes(){

    const theme = useTheme();
    const Stack = createNativeStackNavigator<propsNavigationStack>()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: theme.colors.purple }}>
            <Stack.Screen name="SideMenu" component={SideMenu}/>
            <Stack.Screen name="Checkout" component={Checkout}/>
            <Stack.Screen name="Payment" component={Payment}/>
            <Stack.Screen name="Success" component={Success} options={{ gestureEnabled: false}}/>
        </Stack.Navigator>
    )
}