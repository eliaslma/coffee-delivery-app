import React from "react";
import { Container, Title } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";


interface Props extends RectButtonProps{
    onPress: () => void;
}

export function GetLocationButton({ onPress, ...rest} : Props){
    return (
        <Container onPress={onPress}>
            <Title>BUSCAR</Title>
        </Container>
    )

}


