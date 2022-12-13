import theme from "@myApp/global/styles/theme";
import React from "react";

import { Container, Logo } from "./styles";


export function BuyButton(){
    return(
        <Container activeOpacity={.7}>
            <Logo color={theme.colors.card} weight="fill"/>
        </Container>
    )
}