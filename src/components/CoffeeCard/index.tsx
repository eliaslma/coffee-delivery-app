import React from "react";
import { BuyButton } from "../Buttons/BuyButton";
import { SelectCounter } from "../Buttons/SelectCounter";
import { 
    Container,
    CoffeeImage,
    Description,
    Name,
    About,
    Buy,
    Price,
    Currency,
    Value,
    Actions,
 } from "./styles";




export function CoffeeCard(  {data, buyAction}  ){

    const price = Number(data.price).toLocaleString('pt-BR',{minimumFractionDigits: 2})
    

    return(
        <Container>
            <CoffeeImage source={data.photo}/>
            <Description>
                <Name>{data.name}</Name>
                <About>{data.description}</About>
                <Buy>
                    <Price>
                        <Currency>R$</Currency>
                        <Value>{price}</Value>
                    </Price>
                    <Actions>
                        <SelectCounter/>
                        <BuyButton onPress={buyAction} data={data}/>
                    </Actions>
                </Buy>
            </Description>
        </Container>
    )
}