
import theme from "@myApp/global/styles/theme";
import React, { useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../Input";
import { Container } from "./styles";

interface Props extends TextInputProps{
    control: Control;
    name: string;
    error: FieldValues;
    
}

export function InputFormAddress({ control, name, error, defaultValue, ...rest}: Props){
    
    const [borderColor,setBorderColor] = useState(theme.colors.button);
    
    return(
        <Container> 
            <Controller
                control={control}
                defaultValue={defaultValue}
                render={ ({ field: {onChange, value}}) => (
                    
                    <Input
                        style={{ borderColor: error ? theme.colors.error : `${borderColor}`}}
                        onChangeText={onChange}
                        autoCorrect={false}
                        selectionColor={theme.colors.label}
                        placeholderTextColor={theme.colors.label}
                        onFocus={() => setBorderColor(theme.colors.yellow_dark)}
                        onBlur={() => {setBorderColor(theme.colors.button)}}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
             />
        </Container>

    );
}