import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.purple_light};
    padding: 8px;
    align-items: center;
    justify-content: center;
`;
