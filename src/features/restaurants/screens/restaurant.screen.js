import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBox = styled(View)`
  padding: 16px;
  backgroundcolor: "white";
`;

const ListBox = styled(View)`
  flex: 1;
  padding: 16px;
  backgroundcolor: "white";
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <SafeContainer>
        <SearchBox>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchBox>
        <ListBox>
          <RestaurantInfoCard />
          <Text>{searchQuery}</Text>
        </ListBox>
      </SafeContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
};
