import React from "react";
import { Container, Title } from "./styles";
import { MapPin } from "phosphor-react-native";
import theme from "@myApp/global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export function LocationButton({ location }){
    return (
        <Container activeOpacity={.7}>
            <MapPin size={RFValue(22)} color={theme.colors.purple} weight="fill"/>
            <Title>{location}</Title>
        </Container>
    )
}