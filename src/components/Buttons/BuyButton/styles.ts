import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.purple_dark};
    padding: 8px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    width: ${RFValue(38)}px;
    height: ${RFValue(38)}px;
`;
