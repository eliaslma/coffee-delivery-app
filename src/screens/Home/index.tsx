import React from "react";
import { LocationButton } from "@myApp/components/Buttons/LocationButton";
import {
    Container,
    Header,
    LocationWrapper,
    Logo
} from './styles'



export function Home(){
    return(
        <Container>
            <Header>
                <LocationWrapper>
                    <Logo source={require('../../assets/Logo.png')}/>
                    <LocationButton/>
                </LocationWrapper>
            </Header>
        </Container>
    )
}