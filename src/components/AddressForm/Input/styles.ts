import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput`
    width: 100%;
    padding: 12px;
    font-family: ${({theme}) => theme.fonts.roboto_regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.input} ;
    border-radius: 5px;
    border: 1px solid;
    margin-bottom: 12px;
    justify-content: space-between;
`;