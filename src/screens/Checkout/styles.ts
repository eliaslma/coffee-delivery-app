import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const ListTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.baloo_bold};
    color: ${({theme}) => theme.colors.subtitle};
    width: 100%;
    margin-top: ${getStatusBarHeight() + 28}px;
    padding: 0 18px;
    font-size: ${RFValue(18)}px;
`;

export const CartListContainer = styled.View`
    flex: 1;
    padding: 0 8px;
    margin-top: 15px;
`;

export const CartList = styled.View`
    background-color: ${({ theme }) => theme.colors.card};
    border-radius: 6px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
`;

export const Separator = styled.View`
    height: 1px;
    background-color: ${({theme}) => theme.colors.button};
    margin: 12px 12px;
`;