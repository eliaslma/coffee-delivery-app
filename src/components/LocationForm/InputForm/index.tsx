
import theme from "@myApp/global/styles/theme";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../Input";
import { Container, Error } from "./styles";

interface Props extends TextInputProps{
    control: Control;
    name: string;
    error: FieldValues;
}

export function InputForm({ control, name, error, ...rest}: Props){

    return(
        <Container>
            <Controller
                control={control}
                render={ ({ field: {onChange, value}}) => (
                    <Input
                        type={'zip-code'}
                        selectionColor={theme.colors.purple}
                        value={value}
                        includeRawValueInChangeText={true}
                        onChangeText={(maskedText, rawText) => {onChange(rawText)}}
                        {...rest}
                    />
                )}
                name={name}
             />
            {error && <Error> {error.message} </Error>}
        </Container>

    );
    
}