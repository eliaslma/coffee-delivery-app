import React, { useState } from "react";
import { LocationButton } from "@myApp/components/Buttons/LocationButton";
import { CoffeeCard } from "@myApp/components/CoffeeCard";
import { catalog } from "@myApp/utils/catalog";
import { ViewCartButton } from "@myApp/components/Buttons/ViewCartButton";
import { FlatList } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import {
    Container,
    Header,
    LocationWrapper,
    Logo,
    CoffeeList,
    ListTitle,
    Footer
} from './styles'

interface CardProps{
    id: number;
    quantity: number;
    price: number;
    name: string;
    photo: any;
}

let [totalPrice, totalQuantity] = [0,0]

export function Home(){

    const [cartList, setCartList]  = useState<CardProps[]>([]);
    
    function handleAddCart(id, quantity, price, name, photo){
        const elementAdded = cartList.find(element => element.id === id)

        totalPrice += price * quantity
        totalQuantity += quantity

        // verifica se o produto ja foi adicionado ao carrinho
        if(elementAdded){
            const cartListUpdated = cartList.map((coffeCard) => {
                if(coffeCard.id === id ){
                    return{
                        ...coffeCard,
                        quantity: coffeCard.quantity + quantity
                    }
                }
                return coffeCard;
            });
            
            setCartList(cartListUpdated)

        }

        else{
            const data = {
                id: id,
                quantity: quantity,
                price: price,
                name: name,
                photo: photo,
            
            };
            setCartList(oldState => [...oldState, data]);
        }
    }

    return(
        <Container>     
            <Header>
                <LocationWrapper>
                    <Logo source={require('../../assets/Logo-2.png')}/>
                    <LocationButton data={cartList}/>
                </LocationWrapper>
            </Header>
            <CoffeeList>
                <ListTitle>Nossos cafés</ListTitle>
                <FlatList
                    data={catalog}
                    contentContainerStyle={ !cartList.length ? 
                        {paddingBottom: getBottomSpace(), paddingTop: 16} : {paddingTop: 16} }
                    showsVerticalScrollIndicator={false}
                    renderItem={ ({ item } ) => 
                    <CoffeeCard data={item} handlePressBuyButton={handleAddCart}/> }
                />
                {cartList.length != 0 && 
                    <Footer>
                        <ViewCartButton quantity={totalQuantity} price={totalPrice}/>
                    </Footer>}
            </CoffeeList>
        </Container>
    )
}

