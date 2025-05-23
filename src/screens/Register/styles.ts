import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }: any) => theme.colors.background};
`;

export const Header = styled.View`
    background-color: ${({ theme }: any) => theme.colors.primary};

    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }: any) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }: any) => theme.colors.shape};
`;

export const Form = styled.View`
    flex: 1;
    justify-content: space-between;
    width: 100%;

    padding: 24px;
`;

export const Fields = styled.View``;

export const TransactionTypes = styled.View`
    flex-direction: row;
    justify-content: space-around;

    margin-top: 8px;
    margin-bottom: 16px;
`;
