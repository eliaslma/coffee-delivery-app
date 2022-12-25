import React, { useState, useCallback } from "react";
import { Modal } from "react-native";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getBottomSpace, isIphoneX } from "react-native-iphone-x-helper";

import { LocationButton } from "@myApp/components/Buttons/LocationButton";
import { CoffeeCard } from "@myApp/components/CoffeeCard";
import { catalog } from "@myApp/utils/catalog";
import { ViewCartButton } from "@myApp/components/Buttons/ViewCartButton";
import { PropsStack } from "@myApp/routes/Models";
import { TagButton } from "@myApp/components/Buttons/TagButton";

import {
    Container,
    Header,
    LocationWrapper,
    Photo,
    Logo,
    UserLocation,
    CoffeeList,
    TitleTagsContainer,
    ListTitle,
    Footer
} from './styles'
import { LocationModal } from "@myApp/components/LocationModal";
export interface CardProps{
    id: number;
    quantity: number;
    price: number;
    name: string;
    photo: any;
}

const tags = ["TRADICIONAL" , "ESPECIAL", "COM LEITE","ALCOÓLICO","GELADO"]
let [totalPrice, totalQuantity] = [0,0]

export function Home(){

    const navigation = useNavigation<PropsStack>();
    const [cartList, setCartList]  = useState<CardProps[]>([]);
    const [locationModalOpen,setLocationModalOpen] = useState(true);
    const [location, setLocation] = useState('');

    
    
    function handleOpenLocationModal(){
        setLocationModalOpen(true);
    }

    function handleCloseLocationModal(){
        setLocationModalOpen(false);
    }

    function handleUpdateLocation(address: string){
        setLocation(address)
    }
    
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

    function handleNavCheckout(){
      navigation.navigate("Checkout", { data: cartList, totalCartPrice: totalPrice });
    }

    useFocusEffect( useCallback(()=> { 
        setCartList([])
        totalQuantity = 0
        totalPrice = 0
    },[]));

    return(
        
        <Container>     
            <Header>
                <LocationWrapper>
                    <Logo source={require('../../assets/Logo-2.png')}/>    
                    <UserLocation>
                        <LocationButton location={location} handlePress={handleOpenLocationModal}/>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/70176310?v=4'}}/>
                    </UserLocation>
                </LocationWrapper>
            </Header>
            <CoffeeList>
                <TitleTagsContainer>
                    <ListTitle>Nossos cafés</ListTitle>
                    <FlatList 
                        data={tags} 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} 
                        renderItem={ ({ item }) => 
                            <TagButton tagname={item}/>
                        }
                    />
                </TitleTagsContainer>
                <FlatList
                    data={catalog}
                    contentContainerStyle={ !cartList.length ? 
                        {paddingBottom: getBottomSpace(), paddingTop: 16} : {paddingTop: 16} }
                    showsVerticalScrollIndicator={false}
                    renderItem={ ({ item } ) => 
                        <CoffeeCard data={item} handlePressBuyButton={handleAddCart}/> }
                />
                {cartList.length != 0 && 
                <Footer style={  isIphoneX() ? {paddingBottom: getBottomSpace()} : {paddingBottom: 16}}>
                    <ViewCartButton quantity={totalQuantity} price={totalPrice} handlePress={handleNavCheckout}/>
                </Footer>}
            </CoffeeList>
            
                <Modal visible={locationModalOpen} transparent={true} statusBarTranslucent={true}>
                    <LocationModal handleCloseModal={handleCloseLocationModal} handleUpdateLocation={handleUpdateLocation}/>
                </Modal>
        </Container>
    )
}

