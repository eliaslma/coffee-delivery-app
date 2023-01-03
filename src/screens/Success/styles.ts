import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface IconProps {
    type: 'location' | 'timer' | 'payment'
}

const colors = {
    location: '#8047F8',
    timer: '#DBAC2C',
    payment: '#C47F17',
}

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const AnimationContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-top: ${getStatusBarHeight() + 16}px;
`;

export const OrderContainer = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 16px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.baloo_extra};
    color: ${({theme}) => theme.colors.yellow_dark};
    font-size: ${RFValue(25)}px;
`;

export const Subtitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.roboto_regular};
    color: ${({theme}) => theme.colors.subtitle};
    font-size: ${RFValue(16)}px;
`;

export const OrderInfo = styled.View`
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 16px;
    padding: 16px;
`
export const Icon = styled.View<IconProps>`
    border-radius: 1000px;
    background-color: ${({ type }) => colors[type]};
    padding: 8px;
`;

export const Local = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`;

export const Time = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`;

export const Payment = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const InfoContainer = styled.View`
    margin-left: 8px;
`;

export const Info = styled.Text`
    font-family: ${({theme}) => theme.fonts.roboto_regular};
    color: ${({theme}) => theme.colors.subtitle};
    font-size: ${RFValue(14)}px;
`;

export const InfoFeatured = styled.Text`
    font-family: ${({theme}) => theme.fonts.roboto_bold};
    color: ${({theme}) => theme.colors.subtitle};
    font-size: ${RFValue(14)}px;
`;

export const Footer = styled.View`
    padding-top: 16px;
    background-color: ${({ theme }) => theme.colors.card};
    border-top-width: 1px;
    border-color: ${({theme}) => theme.colors.separator};
`;
