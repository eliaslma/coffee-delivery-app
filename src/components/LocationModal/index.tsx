import React from "react";
import { Container, Modal, Header, InfoContainer, Infos, Title, Subtitle, CloseButton } from "./styles";
import { X } from 'phosphor-react-native'

import { Input } from "../Form/Input";
import { GetLocationButton } from "../Form/GetLocationButton";

export function LocationModal({ handlePress }){

    return (
        <Container>
            <Modal>
                <InfoContainer>
                    <Header>
                        <Infos>
                            <Title>Onde você está?</Title>
                            <Subtitle>Digite um CEP para ter acesso aos produtos e ofertas da sua região.</Subtitle>
                        </Infos>
                        <CloseButton onPress={handlePress}>
                            <X size={24} weight="bold" color="white"/>
                        </CloseButton>
                    </Header>
                    <Input/>
                    <GetLocationButton/>
                </InfoContainer>
            </Modal>
        </Container>
    )



}