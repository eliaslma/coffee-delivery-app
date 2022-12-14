import theme from "@myApp/global/styles/theme";
import { Minus, Plus } from "phosphor-react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";


import { 
    Container,
    Value,
    CounterButton,
 } from "./styles";


export function SelectCounter(){

    return(
        <Container>
            <CounterButton>
                <Minus size={RFValue(16)} weight="bold" color={theme.colors.purple}/>
            </CounterButton>
            <Value>1</Value>
            <CounterButton>
                <Plus size={RFValue(16)} weight="bold" color={theme.colors.purple}/>
            </CounterButton>
        </Container>
    )

}