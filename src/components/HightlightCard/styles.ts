import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

interface TypeProps {
    type: "up" | "down" | "total";
}

export const Container = styled.View`
    background-color: ${({ theme, type }: any) =>
        type === "total" ? theme.colors.secondary : theme.colors.shape};

    width: ${RFValue(300)}px;
    border-radius: 5px;

    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;

    margin-right: 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: ${({ theme, type }: any) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${({ theme, type }: any) =>
        type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(40)}px;

    ${({ type }: TypeProps) =>
        type === "up" &&
        css`
            color: ${({ theme }: any) => theme.colors.success};
        `};
    ${({ type }: TypeProps) =>
        type === "down" &&
        css`
            color: ${({ theme }: any) => theme.colors.attention};
        `};
    ${({ type }: TypeProps) =>
        type === "total" &&
        css`
            color: ${({ theme }: any) => theme.colors.shape};
        `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
    font-family: ${({ theme, type }: any) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;

    color: ${({ theme, type }: any) =>
        type === "total" ? theme.colors.shape : theme.colors.text_dark};

    margin-top: 38px;
`;

export const LastTransaction = styled.Text`
    font-family: ${({ theme, type }: any) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;

    color: ${({ theme, type }: any) =>
        type === "total" ? theme.colors.shape : theme.colors.text};
`;
