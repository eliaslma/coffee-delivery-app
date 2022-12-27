import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.purple_dark};
    border-radius: 6px;
    padding: 12px 8px;
    margin-top: 8px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.roboto_bold};
    font-size: ${RFValue(14)}px;
`;