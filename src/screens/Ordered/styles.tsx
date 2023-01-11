import styled from "styled-components/native";
import { GestureHandlerRootView, BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 0 16px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.baloo_bold};
    color: ${({theme}) => theme.colors.subtitle};
    font-size: ${RFValue(18)}px;
`;

export const BackButton = styled(BorderlessButton)``;

export const CardsContain = styled.View`
    flex: 1;
`;