import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
    border-radius: 12px;
    padding: 16px;
    margin: 8px;
    background-color: ${({ theme }) => theme.colors.card};
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const OrderIdentifier = styled.Text`
    font-family: ${({ theme }) => theme.fonts.baloo_bold};
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.colors.purple};

`;

export const TotalPrice = styled.Text`
    font-family: ${({ theme }) => theme.fonts.baloo_bold};
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.colors.text};

`;

export const Infos = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
`;

export const InfosText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.baloo_regular};
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.colors.text};
`

export const Photo = styled.Image`
    width: ${RFValue(32)}px;
    height: ${RFValue(32)}px;
`;


export const DateFormatted = styled.Text`
    font-family: ${({ theme }) => theme.fonts.baloo_regular};
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
`;