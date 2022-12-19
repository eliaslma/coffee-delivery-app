import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.purple_dark};
    padding: 8px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
`;
