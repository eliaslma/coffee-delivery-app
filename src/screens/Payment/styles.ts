import styled from "styled-components/native";
import { GestureHandlerRootView, BorderlessButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: ${getStatusBarHeight() + 28}px;
    padding: 0 8px;
`;

export const Form = styled.View`
    flex: 1;
    width: 100%;
    padding: 16px 16px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.baloo_bold};
    color: ${({theme}) => theme.colors.subtitle};
    font-size: ${RFValue(18)}px;
`;

export const BackButton = styled(BorderlessButton)``;

export const AddressWrapper = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 16px 16px 0px;
`;
export const Infos = styled.View`
    margin-left: 8px;
`;
export const TitleAddress = styled.Text`
    font-family: ${({theme}) => theme.fonts.roboto_regular};
    color: ${({theme}) => theme.colors.subtitle};
    font-size: ${RFValue(14)}px;

`;
export const SubtitleAddress = styled.Text`
    font-family: ${({theme}) => theme.fonts.roboto_regular};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(12)}px;

`;