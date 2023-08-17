import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as UseOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as UseLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  const [OswaldLoaded] = UseOswald({
    Oswald_400Regular,
  });

  const [LatoLoaded] = UseLato({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !LatoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
