import React from "react";
import theme from "@myApp/global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

import { Trash } from "phosphor-react-native";
import { Container, Title } from "./style";



export function RemoveButton(){


    return (
        <Container>
            <Trash color={theme.colors.purple} size={RFValue(16)}/>
            <Title>REMOVER</Title>
        </Container>
    )

}