import React from "react";
import { Container, Title } from "./styles";
import { MapPin } from "phosphor-react-native";
import theme from "@myApp/global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export function LocationButton({ location, handlePress }){
    return (
        <Container activeOpacity={.7} onPress={handlePress}>
            <MapPin size={RFValue(22)} color={theme.colors.purple} weight="fill"/>
            {location && <Title>{location}</Title>}
            
        </Container>
    )
}