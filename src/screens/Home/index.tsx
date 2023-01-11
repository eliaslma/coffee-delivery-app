import React, { useState, useCallback, useEffect } from "react";
import { Modal } from "react-native";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getBottomSpace, getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAuth } from "@myApp/hooks/Auth";
import { LocationButton } from "@myApp/components/Buttons/LocationButton";
import { CoffeeCard } from "@myApp/components/CoffeeCard";
import { catalog } from "@myApp/utils/catalog";
import { ViewCartButton } from "@myApp/components/Buttons/ViewCartButton";
import { PropsStack } from "@myApp/routes/Models";
import { TagButton } from "@myApp/components/Buttons/TagButton";
import { LocationModal } from "@myApp/components/LocationModal";
import { MenuButton } from "@myApp/components/Buttons/MenuButton";

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



export interface CardProps{
    id: number;
    quantity: number;
    price: number;
    name: string;
    photo: any;
}

const tags = ["TRADICIONAL" , "ESPECIAL", "COM LEITE","ALCOÓLICO","GELADO"]
let [totalPrice, totalQuantity] = [0,0]

export function Home(NavigationDrawer){

    const {user} = useAuth();
    const navigation = useNavigation<PropsStack>();
    const [cartList, setCartList]  = useState<CardProps[]>([]);
    const [locationModalOpen,setLocationModalOpen] = useState(false);
    const [location, setLocation] = useState('');

    async function getLocation(){
        const dataKey = `@coffeedelivery:location_user:${user.id}`
        const response = await AsyncStorage.getItem(dataKey)
        if(response !== null){
            const data = JSON.parse(response)
            const address = `${data.localidade}, ${data.uf}`
            setLocation(address)
        }
        else{
            setLocationModalOpen(true)
        }
    }
    
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
        navigation.navigate("Checkout", { data: cartList, totalCartPrice: totalPrice })    
    }
    
    useEffect(() => {
        getLocation()
    },[]);

    useFocusEffect( useCallback(()=> {
        setCartList([])
        totalQuantity = 0
        totalPrice = 0
    },[]));

    return(
        
        <Container>     
            <Header>
                <LocationWrapper style={ isIphoneX() && {marginTop: getStatusBarHeight()}}>    
                    <UserLocation>
                        <MenuButton handlePress={NavigationDrawer.navigation}/>
                        <Photo source={{ uri: user.picture}}/>
                        <LocationButton location={location} handlePress={handleOpenLocationModal}/>
                    </UserLocation>
                    <Logo source={require('../../assets/Logo-2.png')}/>
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

