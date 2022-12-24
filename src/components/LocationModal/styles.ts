import { GestureHandlerRootView, RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(39, 34, 33, 0.314);
`;

export const Modal = styled.View`
    width: 100%;
    padding: 0 16px;
`;

export const InfoContainer = styled.View`
    border-radius: 6px;
    padding: 16px;
    background-color: white;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const Infos = styled.View`
    flex-shrink: 1;
`;

export const Title = styled.Text`
    font-family: ${({ theme })=> theme.fonts.baloo_bold};
    color: ${({theme}) => theme.colors.subtitle};
    font-size: ${RFValue(20)}px;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme })=> theme.fonts.roboto_regular};
    color: ${({theme}) => theme.colors.label};
    font-size: ${RFValue(14)}px;
`;

export const CloseButton = styled(RectButton)` 
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.purple_dark};
    border-radius: 6px;
    width: ${RFValue(24)}px;
    height: ${RFValue(24)}px;
    
`;