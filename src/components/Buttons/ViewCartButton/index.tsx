import React from "react";
import { Container, CartContainer, Title, Price } from "./styles";
import { Cart } from "@myApp/components/Cart";


export function ViewCartButton( {handlePress, quantity, price}){

    const totalPrice = Number(price).toLocaleString('pt-BR', {minimumFractionDigits: 2})

    return (
        <Container onPress={handlePress} activeOpacity={.7}>
            <CartContainer>
                <Cart counter={quantity}/>
                <Title>VER CARRINHO</Title>
            </CartContainer>
            <Price>R$ {totalPrice}</Price>
        </Container>
        
        )

}