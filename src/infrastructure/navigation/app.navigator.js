import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeContainer } from "../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => ({
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "black",
  tabBarStyle: [
    {
      display: "flex",
    },
    null,
  ],
  tabBarIcon: ({ color, size }) => {
    const iconName = TAB_ICON[route.name];
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

function SettingsScreen() {
  return (
    <SafeContainer>
      <Text>settings</Text>
    </SafeContainer>
  );
}

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
