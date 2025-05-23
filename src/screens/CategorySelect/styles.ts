import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

interface CategoryProps {
    isActive: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }: any) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;

    background-color: ${({ theme }: any) => theme.colors.primary};
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }: any) => theme.fonts.regular};
    color: ${({ theme }: any) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
`;

export const Category = styled.TouchableOpacity`
    width: 100%;
    padding: ${RFValue(15)}px;

    flex-direction: row;
    align-items: center;

    background-color: ${({ isActive }: CategoryProps) =>
        isActive ? theme.colors.secondary_light : theme.colors.background};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: 16px;
`;

export const Name = styled.Text`
    color: ${({ theme }: any) => theme.colors.regular};
    font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }: any) => theme.colors.text};
`;

export const Footer = styled.View`
    width: 100%;
    padding: 24px;
`;
