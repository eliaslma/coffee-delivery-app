import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    background-color:${({ theme }) => theme.colors.card};
    border-radius: 6px;
    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;
    padding: 16px 4px;
    margin: 0px 16px 16px;
    align-items: center;
`;

export const Description = styled.View`
    width: 70%;
`;

export const CoffeeImage = styled.Image`
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;
    left: -16px;
`;

export const Name = styled.Text`
    font-family: ${({ theme })=> theme.fonts.baloo_bold};
    color: ${({theme}) => theme.colors.subtitle};
    font-size: ${RFValue(20)}px;
`;
export const About = styled.Text`
    font-family: ${({ theme })=> theme.fonts.roboto_regular};
    color: ${({theme}) => theme.colors.label};
    font-size: ${RFValue(14)}px;
    margin-bottom: 8px;

`;
export const Buy = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Price = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Currency = styled.Text`
    font-family: ${({theme}) => theme.fonts.roboto_regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
    margin-right: 2px;
`;

export const Value = styled.Text`
    font-family: ${({theme}) => theme.fonts.baloo_extra};
    font-size: ${RFValue(24)}px;
    color: ${({theme}) => theme.colors.text};
`;


export const Actions = styled.View`
    flex-direction: row;
    align-items: center;
`;