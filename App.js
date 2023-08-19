/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import { SafeContainer } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as UseOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as UseLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";

function Map() {
  return (
    <SafeContainer>
      <Text>map</Text>
    </SafeContainer>
  );
}

function SettingsScreen() {
  return (
    <SafeContainer>
      <Text>settings</Text>
    </SafeContainer>
  );
}

const Tab = createBottomTabNavigator();

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
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "black",
              tabBarStyle: [
                {
                  display: "flex",
                },
                null,
              ],
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === "Restaurants") {
                  iconName = "md-restaurant";
                } else if (route.name === "Settings") {
                  iconName = "md-settings";
                } else if (route.name === "Map") {
                  iconName = "md-map";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Map"
              component={Map}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}

//<ThemeProvider theme={theme}></ThemeProvider>

//<StatusBar style="auto" />
//          </ThemeProvider>
