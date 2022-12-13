import styled from "styled-components/native";
import { ShoppingCartSimple } from "phosphor-react-native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.TouchableOpacity`

    background-color: ${({ theme }) => theme.colors.purple_dark};
    padding: 6px;
    border-radius: 8px;
    width: ${RFValue(38)}px;
    height: ${RFValue(38)}px;
    justify-content: center;
    align-items: center;

`;


export const Logo = styled(ShoppingCartSimple)`
    font-size: ${RFValue(22)}px;

`;