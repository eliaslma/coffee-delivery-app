import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled(TextInputMask)`
    width: 100%;
    padding: 16px 18px;
    font-family: ${({theme}) => theme.fonts.roboto_regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
    background-color: ${({ theme }) => theme.colors.card} ;
    border-radius: 5px;
    margin-bottom: 8px;
`;