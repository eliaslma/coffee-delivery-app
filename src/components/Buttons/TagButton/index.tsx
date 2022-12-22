import React from "react";
import { Container, Title } from "./styles";

export function TagButton({tagname}){

    return(
        <Container activeOpacity={.5}>
            <Title>{tagname}</Title>
        </Container>
    )

}