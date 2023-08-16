import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const RestaurantInfo = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>RestaurantInfo list</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
