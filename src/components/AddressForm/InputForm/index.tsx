
import theme from "@myApp/global/styles/theme";
import React, { useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../Input";
import { Container, Error } from "./styles";

interface Props extends TextInputProps{
    control: Control;
    name: string;
    error: FieldValues;
}

export function InputFormAddress({ control, name, error, ...rest}: Props){

    const [borderColor,setBorderColor] = useState(theme.colors.button);

    return(
        <Container> 
            <Controller
                control={control}
                render={ ({ field: {onChange, value}}) => (
                    <Input
                        style={{ borderColor: `${borderColor}`}}
                        onChangeText={onChange}
                        value={value}
                        autoCorrect={false}
                        selectionColor={theme.colors.label}
                        placeholderTextColor={theme.colors.label}
                        onFocus={() => setBorderColor(theme.colors.yellow_dark)}
                        onBlur={() => setBorderColor(theme.colors.button)}
                        {...rest}/>
                )}
                name={name}
             />
            {error && <Error> {error.message} </Error>}
        </Container>

    );
}