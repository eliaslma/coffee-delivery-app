import { MapPin } from "phosphor-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.purple_light};
    padding: 8px;
    flex-direction: row;
    align-items: center;

`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${ ({theme}) => theme.colors.purple_dark};
    font-family: ${({ theme }) => theme.fonts.roboto_regular};
    margin-left: 4px;
`;

export const Logo = styled(MapPin)`
    font-size: ${RFValue(22)}px;

`;