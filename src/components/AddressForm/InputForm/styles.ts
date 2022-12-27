import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
`;

export const Error = styled.Text`
    font-size: ${RFValue(14)}px;
    color: rgba(232, 63, 91, 0.6);
    font-family: ${({ theme }) => theme.fonts.roboto_regular};
`;