import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    background-color: ${({ theme }: any) => theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 5px;
    padding: 18px 16px;
`;

export const Category = styled.Text`
    font-family: ${({ theme }: any) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }: any) => theme.colors.text};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }: any) => theme.colors.text};
`;
