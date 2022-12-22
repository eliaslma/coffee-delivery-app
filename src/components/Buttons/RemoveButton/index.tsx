import React from "react";
import theme from "@myApp/global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

import { Trash } from "phosphor-react-native";
import { Container, Title } from "./style";

export function RemoveButton({data,handlePress,quantity}){

    const totalPrice = quantity * data.price

    return (
        <Container onPress={() => handlePress(data.id, totalPrice)}>
            <Trash color={theme.colors.purple} size={RFValue(16)}/>
            <Title>REMOVER</Title>
        </Container>
    )

}