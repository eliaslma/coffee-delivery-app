import React, { useState } from "react";
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

export function CoffeeCard(  {data, handlePressBuyButton}  ){

    const [quantityCoffee, setQuantityCoffee] = useState(1)
    const price = Number(data.price).toLocaleString('pt-BR',{minimumFractionDigits: 2})
    
    function handleIncrementQuantity(){
      setQuantityCoffee(quantityCoffee + 1)
    }

    function handleDecrementQuantity(){
        setQuantityCoffee(quantityCoffee - 1)
    }

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
                        <SelectCounter increment={handleIncrementQuantity} decrement={handleDecrementQuantity} quantity={quantityCoffee} />
                        <BuyButton handlePress={handlePressBuyButton} data={data} quantity={quantityCoffee}/>
                    </Actions>
                </Buy>
            </Description>
        </Container>
    )
}