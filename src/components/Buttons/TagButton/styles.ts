import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    border-radius: 100px;
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.yellow};
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
    margin-right: 4px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto_bold};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.yellow};
`;