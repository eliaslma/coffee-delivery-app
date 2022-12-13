import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(104)}px;
`;

export const LocationWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + 28}px;
`;

export const Logo = styled.Image`
    width: ${RFValue(85)}px;
    height: ${RFValue(40)}px;
`;

export const LoadContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

`;

