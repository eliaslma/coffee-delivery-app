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

// utilziar useEffect para verificar o valor do useState quantityCoffee e atualizar o total do cart
export function CoffeeSelected({ data, handleRemoveCoffee, handleIncrementPrice, handleDecrementPrice }){

    const [quantityCoffee, setQuantityCoffee] = useState(data.quantity);
    const totalPrice = data.price * quantityCoffee
    const totalPriceFormatted = Number(totalPrice).toLocaleString('pt-BR',{ minimumFractionDigits: 2})

    function handleIncrementQuantity(){
        handleIncrementPrice(data.price)
        setQuantityCoffee(quantityCoffee + 1)
    }
  
    function handleDecrementQuantity(){
        handleDecrementPrice(data.price)
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
                        <RemoveButton data={data} handlePress={handleRemoveCoffee} quantity={quantityCoffee}/>
                    </Actions>
                </Infos>
            </Description>
            <TotalPrice>R$ {totalPriceFormatted}</TotalPrice>
        </Container>
    )

}