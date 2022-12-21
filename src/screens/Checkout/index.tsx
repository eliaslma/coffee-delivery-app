import React from "react";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";
import { CoffeeSelected } from "@myApp/components/CoffeeSelected";
import { Container, CartList, ListTitle, CartListContainer, Separator } from "./styles";



export function Checkout(){
    const route = useRoute()
    const [cartListSelected,setCartListSelected] = useState(route.params['data'])
    
    function handleRemoveCoffee(id: number){
        setCartListSelected(oldState => oldState.filter(coffee => coffee.id !== id))
    }

    return (
        <Container>
            <ListTitle>Cafés selecionados</ListTitle>
            <CartListContainer>
                <CartList>
                    <FlatList
                        data={cartListSelected}
                        showsVerticalScrollIndicator={false}
                        renderItem={ ({ item } ) => 
                        <CoffeeSelected data={item} handleRemoveCoffee={handleRemoveCoffee} />}
                        ItemSeparatorComponent={ () =>
                            <Separator/>
                        }
                    />
                </CartList>
            </CartListContainer>
        </Container>

    )
        
    
    
}