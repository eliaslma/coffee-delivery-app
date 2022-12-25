import React from "react";
import { Container } from "./styles";
import { TextInputMaskProps } from "react-native-masked-text";


export function Input({...rest} : TextInputMaskProps){
    return (
        <Container {...rest}/>        
    );


}