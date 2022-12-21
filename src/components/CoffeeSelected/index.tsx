import React from "react";
import { RemoveButton } from "../Buttons/RemoveButton";
import { SelectCounter } from "../Buttons/SelectCounter";
import { useState } from "react";


import { 
    Container, 
    CoffeeImage, 
    Description,
    Infos,
    Title,
    Actions,
    TotalPrice
} from "./styles";


let totalCartPrice = 0

export function CoffeeSelected({ data, handleRemoveCoffee }){
    const [quantityCoffee, setQuantityCoffee] = useState(data.quantity);
    const totalPrice = data.price * quantityCoffee
    const totalPriceFormatted = Number(totalPrice).toLocaleString('pt-BR',{ minimumFractionDigits: 2})
    

    function handleIncrementQuantity(){
        totalCartPrice += data.price
        setQuantityCoffee(quantityCoffee + 1)
    }
  
    function handleDecrementQuantity(){
        totalCartPrice -= data.price
        setQuantityCoffee(quantityCoffee - 1)
    }

    return (
        <Container>
            <Description>
                <CoffeeImage source={data.photo}/>
                <Infos>
                    <Title>{data.name}</Title>
                    <Actions>
                        <SelectCounter quantity={quantityCoffee} increment={handleIncrementQuantity} decrement={handleDecrementQuantity}/>
                        <RemoveButton id={data.id} handlePress={handleRemoveCoffee}/>
                    </Actions>
                </Infos>
            </Description>
            <TotalPrice>R$ {totalPriceFormatted}</TotalPrice>
            
        </Container>
    )

}