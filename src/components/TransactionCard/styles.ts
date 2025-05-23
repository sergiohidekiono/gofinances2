import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TransactionProps {
    type: "positive" | "negative";
}

export const Container = styled.View`
    background-color: ${({ theme }: any) => theme.colors.shape};

    border-radius: 5px;

    padding: 17px 24px;
    margin-bottom: 16px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }: any) => theme.fonts.regular};
    font-size: 14px;
    color: ${({ theme }: any) => theme.colors.text_dark};
`;

export const Amount = styled.Text<TransactionProps>`
    font-family: ${({ theme }: any) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    color: ${({ theme, type }: any) =>
        type === "positive" ? theme.colors.success : theme.colors.attention};
    margin-top: 2px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 19px;
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }: any) => theme.colors.text};
`;

export const CategoryName = styled.Text`
    font-family: ${({ theme }: any) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }: any) => theme.colors.text};

    margin-left: 17px;
`;

export const Date = styled.Text`
    font-family: ${({ theme }: any) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }: any) => theme.colors.text};
`;
