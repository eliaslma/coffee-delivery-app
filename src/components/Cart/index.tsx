import React from "react";
import { ShoppingCartSimple } from "phosphor-react-native";
import { Container, Counter, Value } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "@myApp/global/styles/theme";

export function Cart({counter}){
    return(
        <Container>
            <ShoppingCartSimple color={theme.colors.yellow_dark} size={RFValue(22)} weight="fill"/>
            <Counter>
                <Value>{counter}</Value>
            </Counter>
        </Container> 
    )
}