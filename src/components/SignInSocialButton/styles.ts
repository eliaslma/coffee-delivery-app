import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Button = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 5px;
    margin-bottom: 16px;
`;

export const ImageContainer = styled.View`
    align-items: center;
    border-color: ${({theme}) => theme.colors.background};
    border-right-width: 1px;
    height: 100%;
    padding: ${RFValue(16)}px;
`;

export const Text = styled.Text`
    flex: 1;
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.roboto_medium};
    color: ${({ theme }) => theme.colors.title};
    text-align: center;
`;