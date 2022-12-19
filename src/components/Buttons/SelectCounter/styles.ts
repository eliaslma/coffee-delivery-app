import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.button};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 6px;    
`;

export const CounterButton = styled(BorderlessButton)``;

export const Value = styled.Text`
    font-size: ${RFValue(17)}px;
    margin: 0 10px;
`;



