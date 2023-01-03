import React from "react";
import { Coffee } from "phosphor-react-native";

import theme from "@myApp/global/styles/theme";
import { 
    Container,
    Header,
    OrderIdentifier,
    TotalPrice,
    Infos,
    InfosText,
    Photo,
    Footer,
    DateFormatted

} from "./styles";


interface OrderCardProps {
    id: string;
    totalCartPrice: string;
    coffeeList: [];
    date: Date;
}

interface CoffeeListProps{
    name: string;
    id: string;
    totalPrice: number;
    quantity: number;
    photo: any;
    
}

export function OrderCard({id, totalCartPrice, coffeeList, date} : OrderCardProps){

    const dateFormatted = new Date(date).toLocaleDateString();
   
    return(
        <Container>
            <Header>
                <OrderIdentifier>#{id.substring(0,8)}</OrderIdentifier>
                <Coffee size={24} weight="fill" color={theme.colors.yellow_dark}/>
            </Header>
            
            { coffeeList.map((coffee: CoffeeListProps) =>
            <Infos key={coffee.id}>
                <Photo source={coffee.photo}/>   
                <InfosText>{coffee.quantity}x {coffee.name}</InfosText>
                <InfosText>R$ {coffee.totalPrice.toLocaleString('pt-BR',{minimumFractionDigits: 2})}</InfosText>
            </Infos>
            )}
            <Footer>
                <DateFormatted>{dateFormatted}</DateFormatted>
                <TotalPrice>R$ {totalCartPrice}</TotalPrice>
            </Footer>
        </Container>
    );


}