import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.yellow};
    margin: 16px 16px 0px;
    border-radius: 6px;
    padding: 12px 8px;

`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.roboto_bold};
    font-size: ${RFValue(14)}px;
`;