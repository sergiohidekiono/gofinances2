import React from "react";
import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

const icons = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
};

interface Props extends TouchableOpacityProps {
    type: "up" | "down";
    title: string;
    isActive: boolean;
}

export default function TransactionTypeButton({
    title,
    type,
    isActive,
    ...rest
}: Props) {
    return (
        <Container isActive={isActive} type={type} {...rest}>
            <Icon name={icons[type]} type={type} />
            <Title>{title}</Title>
        </Container>
    );
}
