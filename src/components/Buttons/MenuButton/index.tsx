import React from "react";
import { Container } from "./styles";
import { List } from "phosphor-react-native";
import theme from "@myApp/global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";


export function MenuButton( {handlePress} ){

    return (
        <Container activeOpacity={.7} onPress={() => {handlePress.openDrawer()}}>
            <List size={RFValue(22)} color={theme.colors.purple} weight="bold"/>
        </Container>
    )
}