import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.button};
    padding: 6.5px 8px;
    border-radius: 6px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.roboto_regular};
    font-size: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.text};
    margin-left: 4px;

`