import React from "react";
import { Container, Title } from "./styles";

export function CheckoutButton({handlePress, name}){
    return (
        <Container onPress={handlePress}>
            <Title>{name}</Title>
        </Container>
    )
}