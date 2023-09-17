import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import {
  useFonts as UseOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as UseLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAA-Qx7VnR_J0JxdUGwoVkwuRgqLDkXBto",
  authDomain: "mealstogo-f5e57.firebaseapp.com",
  projectId: "mealstogo-f5e57",
  storageBucket: "mealstogo-f5e57.appspot.com",
  messagingSenderId: "982907915056",
  appId: "1:982907915056:web:1920c92241b925f0de56f5",
};

initializeApp(firebaseConfig);

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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
