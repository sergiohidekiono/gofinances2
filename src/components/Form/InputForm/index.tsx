import React from "react";
import { Container, Error } from "./styles";
import Input from "../Input";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
    control: Control;
    name: string;
    error: string;
}

export default function InputForm({ control, name, error, ...rest }: Props) {
    return (
        <Container>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <Input onChangeText={onChange} value={value} {...rest} />
                )}
            />
            <Error>{error && <Error>{error}</Error>}</Error>
        </Container>
    );
}
