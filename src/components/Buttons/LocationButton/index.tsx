import React from "react";
import { Container, Title, Logo } from "./styles";
import theme from "@myApp/global/styles/theme";

export function LocationButton(){
    return (
        <Container activeOpacity={.7}>
            <Logo color={theme.colors.purple} weight="fill"/>
            <Title>Maringá, PR</Title>
        </Container>
    )
}