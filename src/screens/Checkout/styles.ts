import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`
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
    padding: 16px 8px;
`;

export const CartList = styled.View`
    background-color: ${({ theme }) => theme.colors.card};
    border-radius: 8px;
    
`;

export const Separator = styled.View`
    height: 1px;
    background-color: ${({theme}) => theme.colors.button};
    margin: 12px 16px;
`;

export const Footer = styled.View`
    padding-top: 16px;
    background-color: ${({ theme }) => theme.colors.card};
    border-top-width: 1px;
    border-color: ${({theme}) => theme.colors.separator};
`;

export const TotalPriceContain = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 16px 16px;
`;

export const TotalPrice = styled.Text`
    font-family: ${({theme}) => theme.fonts.roboto_bold};;
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.subtitle};
`;

export const TotalPriceItems = styled.Text`
    font-family: ${({theme}) => theme.fonts.roboto_regular};;
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
`;