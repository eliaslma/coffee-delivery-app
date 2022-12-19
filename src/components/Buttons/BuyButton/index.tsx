import theme from "@myApp/global/styles/theme";
import React from "react";
import { ShoppingCartSimple } from "phosphor-react-native";

import { Container } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";




export function BuyButton({handlePress, data, quantity}){
    return(
        <Container activeOpacity={.7} onPress={() => handlePress(data.id,quantity,data.price,data.name,data.photo)}>
            <ShoppingCartSimple size={RFValue(22)} color={theme.colors.card} weight="fill"/>
        </Container>
    )
}