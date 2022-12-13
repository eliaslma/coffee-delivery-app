import React from "react";
import { Container } from "./styles";
import { ActivityIndicator } from "react-native";
import theme from "@myApp/global/styles/theme";


export function Loader(){

    return(
        <Container>
            <ActivityIndicator size="large" color={theme.colors.purple_dark}/>
        </Container>
    )

}