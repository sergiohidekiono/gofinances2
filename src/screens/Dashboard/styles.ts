import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import {
    getBottomSpace,
    getStatusBarHeight,
} from "react-native-iphone-x-helper";

import { DataListProps } from ".";
import { FlatList } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }: any) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;

    background-color: ${({ theme }: any) => theme.colors.primary};

    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;

    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;

    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }: any) => theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }: any) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({ theme }: any) => theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }: any) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    color: ${({ theme }: any) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 },
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;

    margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }: any) => theme.fonts.regular};

    margin-bottom: 16px;
`;

export const TransactionList = styled(
    FlatList as new () => FlatList<DataListProps>
).attrs({
    showVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace(),
    },
})``;
