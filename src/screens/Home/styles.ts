import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform } from 'react-native';

export const Container = styled(GestureHandlerRootView)`
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
    padding: 0 18px;
    margin-top: ${getStatusBarHeight() + 28}px;
`;

export const Logo = styled.Image`
    width: ${RFValue(85)}px;
    height: ${RFValue(40)}px;
`;

export const CoffeeList = styled.View`
    flex: 1;
`;

export const ListTitle = styled.Text`
    width: 100%;
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme}) => theme.fonts.baloo_extra};
    color: ${({ theme }) => theme.colors.subtitle};
    padding: 0 18px;
    border-width: 0.5px;
    border-color: ${({theme}) => theme.colors.separator};
    
`;

export const Footer = styled.View.attrs({ 
    paddingBottom: Platform.OS === 'ios' ? getBottomSpace() : 16
    })`
   width: 100%;
   border-top-width: 0.5px;
   border-color: ${({theme}) => theme.colors.separator};
`