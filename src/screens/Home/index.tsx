import React, { useState } from "react";
import { LocationButton } from "@myApp/components/Buttons/LocationButton";
import { CoffeeCard } from "@myApp/components/CoffeeCard";
import { catalog } from "@myApp/utils/catalog";

import {
    Container,
    Header,
    Separator,
    LocationWrapper,
    Logo,
    CoffeeList,
    ListTitle,
} from './styles'
import { FlatList } from "react-native";

interface CardProps{
    id: number;
    quantity: number;
    price: number;
    name: string;
    photo: any;
}

export function Home(){

    const [cartList, setCartList]  = useState<CardProps[]>([]);

    function handleAddCart(id, quantity, price, name, photo){
        const data = {
            id: id,
            quantity: quantity,
            price: price,
            name: name,
            photo: photo,
            
        };
        setCartList(oldState => [...oldState, data]);
    }

    return(
        <Container>     
            <Header>
                <LocationWrapper>
                    <Logo source={require('../../assets/Logo-2.png')}/>
                    <LocationButton data={cartList}/>
                </LocationWrapper>
            </Header>
            <Separator/>
            <CoffeeList>
                <ListTitle>Nossos cafés</ListTitle>
                <FlatList
                    data={catalog}
                    showsVerticalScrollIndicator={false}
                    renderItem={ ({ item } ) => 
                        <CoffeeCard data={item} buyAction={handleAddCart}/> }
                />
            </CoffeeList>
        </Container>
    )
}