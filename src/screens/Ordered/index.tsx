import React, { useEffect, useState, useCallback } from "react";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CaretLeft } from "phosphor-react-native";

import { OrderCard } from "@myApp/components/OrderCard";
import { Container, Header, Title, BackButton, CardsContain } from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import { getBottomSpace, isIphoneX, getStatusBarHeight } from "react-native-iphone-x-helper";
import { useAuth } from "@myApp/hooks/auth";

export function Ordered({navigation}){

    const [wishList, setMyWishList] = useState([])
    const { user } = useAuth();

    async function getWishList(){
        const dataKey = `@coffeedelivery:ordereds_user:${user.id}`;
        const response = await AsyncStorage.getItem(dataKey);
        const dataFormatted = response ? JSON.parse(response) : null;
        setMyWishList(dataFormatted)
    }

    useEffect(() => {
        getWishList();
    },[]);

    useFocusEffect( useCallback(()=> {
        getWishList();
    },[]));

    return (
        <Container>
            <Header style={ isIphoneX() ? {marginTop: getStatusBarHeight() + 16} : { marginTop: 16}}>
                <BackButton onPress={() => {navigation.goBack()}}>
                    <CaretLeft size={24} weight="bold"/>
                </BackButton>
                <Title>Meus pedidos</Title>
            </Header>
            <CardsContain>
                <FlatList showsVerticalScrollIndicator={false} 
                    data={wishList} 
                    keyExtractor={( item ) => item.id}
                    contentContainerStyle={ isIphoneX() ? {paddingBottom: getBottomSpace()} : { paddingBottom: 16}}
                    renderItem={({item}) => (
                    <OrderCard 
                        id={item.id} 
                        totalCartPrice={item.totalCartPrice} 
                        coffeeList={item.coffeelist}
                        date={item.date}
                    />

                )} />
            </CardsContain>



        </Container>


    );

}