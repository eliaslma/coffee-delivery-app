import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform } from 'react-native';

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
`;

export const LocationWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    
`;

export const Photo = styled.Image`
    width: ${RFValue(34.5)}px;
    height: ${RFValue(34.5)}px;
    border-radius: 6px;
    margin: 0px 8px;
    border: 1px solid ${({ theme}) => theme.colors.purple_light};
`;

export const Logo = styled.Image`
    width: ${RFValue(25)}px;
    height: ${RFValue(40)}px;
`;

export const UserLocation = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CoffeeList = styled.View`
    flex: 1;
`;

export const TitleTagsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.separator};
`;

export const ListTitle = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme}) => theme.fonts.baloo_extra};
    color: ${({ theme }) => theme.colors.subtitle};
    padding: 0 16px;
`;

export const Footer = styled.View`
   width: 100%;
   border-top-width: 1px;
   border-color: ${({theme}) => theme.colors.separator};
`