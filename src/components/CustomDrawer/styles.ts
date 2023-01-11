import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme}) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.colors.purple};
`;

export const UserWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 16px 16px;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 6px;
`;

export const User = styled.View`
    margin-left: 16px;
`;

export const UserGreeting = styled.Text`

    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.baloo_regular};
`;

export const UserName = styled.Text`

    color: ${({ theme}) => theme.colors.white };
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.baloo_bold};

`;

export const SignOutWrapper = styled.View`
    padding: 0 16px;
`;

export const OutTitle = styled.Text`
    color: ${({ theme}) => theme.colors.text };
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.baloo_bold};
`;

export const Icon = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;