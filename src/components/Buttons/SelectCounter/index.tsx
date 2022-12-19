import theme from "@myApp/global/styles/theme";
import { Minus, Plus } from "phosphor-react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";


import { 
    Container,
    Value,
    CounterButton,
 } from "./styles";


export function SelectCounter({ increment, decrement, quantity }){

    return(
        <Container>
            <CounterButton onPress={() =>  { if(quantity != 1) {decrement()}}}>
                <Minus size={RFValue(18)} weight="bold" color={theme.colors.purple}/>
            </CounterButton>
            <Value>{quantity}</Value>
            <CounterButton onPress={() => increment()}>
                <Plus size={RFValue(18)} weight="bold" color={theme.colors.purple}/>
            </CounterButton>
        </Container>
    )

}