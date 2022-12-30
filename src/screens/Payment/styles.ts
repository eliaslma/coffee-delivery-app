import styled, { css } from "styled-components/native";
import { GestureHandlerRootView, BorderlessButton, RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

interface SelectPaymentProps {
    isSelected?: boolean
}

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: ${getStatusBarHeight() + 28}px;
    padding: 0 8px;
`;

export const Form = styled.View`
    flex: 1;
    width: 100%;
    padding: 16px 16px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.baloo_bold};
    color: ${({theme}) => theme.colors.subtitle};
    font-size: ${RFValue(18)}px;
`;

export const BackButton = styled(BorderlessButton)``;

export const AddressWrapper = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 8px 16px 0px;
`;

export const PaymentWrapper = styled.View`
    flex-direction: row;
    margin-top: 8px;
    margin-bottom: 16px;
`

export const Infos = styled.View`
    margin-left: 8px;
`;

export const TitleAddress = styled.Text`
    font-family: ${({theme}) => theme.fonts.roboto_regular};
    color: ${({theme}) => theme.colors.subtitle};
    font-size: ${RFValue(14)}px;

`;
export const SubtitleAddress = styled.Text`
    font-family: ${({theme}) => theme.fonts.roboto_regular};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(12)}px;
`;

export const SelectPayment = styled(RectButton)<SelectPaymentProps>`
 ${({ theme, isSelected }) => css`
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: ${theme.colors.button};
    border-radius: 6px;
    padding: 16px;
    margin-bottom: 8px;
    
    ${isSelected && css`
        border: 1px solid ${theme.colors.purple};
        background-color: ${theme.colors.purple_light};
    `}
 `}
`;

export const SelectPaymentTitle = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.roboto_regular};
    font-size: ${RFValue(12)}px;
    margin-left: 12px;
`;

export const Footer = styled.View`
    padding-top: 16px;
    background-color: ${({ theme }) => theme.colors.card};
    border-top-width: 1px;
    border-color: ${({theme}) => theme.colors.separator};
`;

