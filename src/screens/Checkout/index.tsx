import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";
import { CoffeeSelected } from "@myApp/components/CoffeeSelected";
import { CheckoutButton } from "@myApp/components/Buttons/CheckoutButton";
import { getBottomSpace, isIphoneX } from "react-native-iphone-x-helper";
import { 
    Container, 
    CartList, 
    ListTitle, 
    CartListContainer, 
    Separator,
    Footer,
    TotalPriceContain,
    TotalPrice,
    TotalPriceItems
} from "./styles";


export function Checkout(){

    const route = useRoute();
    const navigate = useNavigation();
    const [totalCartPrice, setTotalPrice] = useState(route.params['totalCartPrice'])
    const [cartListSelected,setCartListSelected] = useState(route.params['data'])
    const totalCartPriceFormatted = Number(totalCartPrice).toLocaleString('pt-BR',{minimumFractionDigits: 2})
        
    function handleRemoveCoffee(id: number, totalPrice: number){
        if(cartListSelected[1] == undefined){
            navigate.goBack()
        }
        else {
            handleDecrementPrice(totalPrice)
            setCartListSelected(oldState => oldState.filter(coffee => coffee.id !== id))
        }
    }

    function handleIncrementPrice(price: number){
        setTotalPrice(totalCartPrice + price)
    }

    function handleDecrementPrice(price: number){
        setTotalPrice(totalCartPrice - price)
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
                        <CoffeeSelected 
                            data={item} 
                            handleRemoveCoffee={handleRemoveCoffee} 
                            handleIncrementPrice={handleIncrementPrice}
                            handleDecrementPrice={handleDecrementPrice}
                        />}
                        ItemSeparatorComponent={ () =>
                            <Separator/>
                        }
                    />
                </CartList>
            </CartListContainer>
            <Footer style={isIphoneX() ? {paddingBottom: getBottomSpace()} : {paddingBottom: 16}}>
                <TotalPriceContain>
                    <TotalPriceItems>Total de itens</TotalPriceItems>
                    <TotalPriceItems>R$ {totalCartPriceFormatted}</TotalPriceItems>
                </TotalPriceContain>
                <TotalPriceContain>
                    <TotalPriceItems>Entrega</TotalPriceItems>
                    <TotalPriceItems>Grátis</TotalPriceItems>
                </TotalPriceContain>
                <TotalPriceContain>
                    <TotalPrice>Total</TotalPrice>
                    <TotalPrice>R$ {totalCartPriceFormatted}</TotalPrice>
                </TotalPriceContain>
                <CheckoutButton/>
            </Footer>
        </Container>

    )
}