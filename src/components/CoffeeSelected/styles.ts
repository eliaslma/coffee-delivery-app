import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native"

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 4px;
`;

export const CoffeeImage = styled.Image`
    width: ${RFValue(64)}px;
    height: ${RFValue(64)}px;
`;

export const Description = styled.View`
    flex-direction: row;
    align-items: center;
    
`;

export const Infos = styled.View`
    margin-left: 20px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto_regular};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.subtitle};
`;

export const Actions = styled.View`
    margin-top: 8px;
    flex-direction: row;
`;

export const TotalPrice = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto_bold};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;
    margin-right: 16px;
`;

