import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.yellow_light};
    padding: 8px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Counter = styled.View`
    background-color: ${({ theme }) => theme.colors.yellow_dark};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    position: absolute;
    right: ${RFValue(-8.35)}px;
    top: ${RFValue(-8)}px;
    width: ${RFValue(20)}px;
    height: ${RFValue(20)}px;
`;

export const Value = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.roboto_bold};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;