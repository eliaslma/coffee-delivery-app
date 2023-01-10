import React, { useEffect } from "react";
import { useState } from "react";
import { FlatList } from "react-native";
import { CoffeeSelected } from "@myApp/components/CoffeeSelected";
import { CheckoutButton } from "@myApp/components/Buttons/CheckoutButton";
import { getBottomSpace, isIphoneX, getStatusBarHeight } from "react-native-iphone-x-helper";
import { CaretLeft } from "phosphor-react-native";
import { 
    Container,
    Header, 
    CartList, 
    ListTitle, 
    CartListContainer, 
    Separator,
    Footer,
    TotalPriceContain,
    TotalPrice,
    TotalPriceItems,
    BackButton
} from "./styles";


export function Checkout({navigation, route}){

    const [totalCartPrice, setTotalPrice] = useState(route.params['totalCartPrice'])
    const [cartListSelected,setCartListSelected] = useState(route.params['data'])
    const totalCartPriceFormatted = Number(totalCartPrice).toLocaleString('pt-BR',{minimumFractionDigits: 2})
    
    function handleRemoveCoffee(id: number, totalPrice: number){
        if(cartListSelected[1] == undefined){
            navigation.goBack()
        }
        else {
            handleDecrementPrice(totalPrice)
            setCartListSelected(oldState => oldState.filter(coffee => coffee.id !== id))
        }
    }

    function handleIncreaseAmountCoffee(id: number,price: number){

        const cartListUpdated = cartListSelected.map((coffeeCard) => {
            if(coffeeCard.id === id ){
                return{
                    ...coffeeCard,
                    quantity: coffeeCard.quantity + 1,
                    totalPrice: (coffeeCard.quantity + 1) * coffeeCard.price
                }
            }
            return coffeeCard;
        });
        
        setCartListSelected(cartListUpdated)
        setTotalPrice(totalCartPrice + price)
    }

    function handleDecreaseAmountCoffee(id: number,price: number){

        const cartListUpdated = cartListSelected.map((coffeeCard) => {
            if(coffeeCard.id === id ){
                return{
                    ...coffeeCard,
                    quantity: coffeeCard.quantity - 1,
                    totalPrice: (coffeeCard.quantity - 1) * coffeeCard.price
                    
                }
            }
            return coffeeCard;
        });
        
        setCartListSelected(cartListUpdated)
        setTotalPrice(totalCartPrice - price)
    }

    function handleDecrementPrice(price: number){
        setTotalPrice(totalCartPrice - price)
    }

    function updateTotalCoffeePrice(){
        const updatedTotalCoffeePrice = cartListSelected.map((coffeeCard) => {
            
            return{
                ...coffeeCard,
                totalPrice: coffeeCard.quantity * coffeeCard.price
            }
        
        return coffeeCard
        });
        setCartListSelected(updatedTotalCoffeePrice)
    }

    function handleNavPayment(){
        navigation.navigate("Payment", { data: cartListSelected, totalCartPrice: totalCartPriceFormatted })   
    }

    useEffect(() => {
        updateTotalCoffeePrice()
    },[]);


    return (
        <Container>
            <Header style={ isIphoneX() ? {marginTop: getStatusBarHeight() + 16} : {marginTop: 16}}>
                <BackButton onPress={() => navigation.goBack()}>
                    <CaretLeft size={24} weight="bold"/>
                </BackButton>
                <ListTitle>Cafés selecionados</ListTitle>
            </Header>
            <CartListContainer>
                <CartList>
                    <FlatList
                        data={cartListSelected}
                        showsVerticalScrollIndicator={false}
                        renderItem={ ({ item } ) => 
                        <CoffeeSelected 
                            data={item} 
                            handleRemoveCoffee={handleRemoveCoffee} 
                            handleIncreaseCoffee={handleIncreaseAmountCoffee}
                            handleDecreaseCoffee={handleDecreaseAmountCoffee}
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
                <CheckoutButton name="CONTINUAR" handlePress={handleNavPayment}/>
            </Footer>
        </Container>

    )
}