import Reac from "react";
import { Container, Title } from "./styles";
import { MapPin } from "phosphor-react-native";
import theme from "@myApp/global/styles/theme";

export function LocationButton(){
    return (
        <Container activeOpacity={.7}>
            <MapPin color={theme.colors.purple} weight="fill" size={22}/>
            <Title>Maringá, PR</Title>
        </Container>
    )
}