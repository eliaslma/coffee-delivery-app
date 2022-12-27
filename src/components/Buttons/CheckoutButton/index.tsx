import React from "react";
import { Container, Title } from "./styles";

export function CheckoutButton({handlePress}){
    return (
        <Container onPress={handlePress}>
            <Title>CONTINUAR</Title>
        </Container>
    )
}