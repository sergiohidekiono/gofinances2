import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import Register from "./src/screens/Register";

// Impede o fechamento automático da Splash
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
    });

    // Efeito para esconder a splash quando as fontes estiverem prontas
    useEffect(() => {
        async function prepare() {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null; // Mantém a splash ativa
    }

    return (
        <ThemeProvider theme={theme}>
            <Register />
        </ThemeProvider>
    );
}
