import { useAuth } from "@myApp/hooks/Auth";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import React from "react";
import { AuthRoutes } from "./auth.routes";



export function Routes(){

    const { user } = useAuth();

    return(
        <NavigationContainer>
            {user.id ? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    );

}