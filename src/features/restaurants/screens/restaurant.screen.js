import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, Text, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.index.component";

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBox = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingBottom: 80,
  },
})``;

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
        <Spacer type="sides" size="medium">
          <RestaurantList
            data={[
              { name: 1 },
              { name: 2 },
              { name: 3 },
              { name: 4 },
              { name: 5 },
              { name: 6 },
              { name: 7 },
              { name: 8 },
              { name: 9 },
              { name: 10 },
              { name: 11 },
              { name: 12 },
              { name: 13 },
              { name: 14 },
            ]}
            renderItem={() => (
              <Spacer type="single" position="bottom" size="large">
                <RestaurantInfoCard />
              </Spacer>
            )}
            keyExtractor={(item) => item.name}
          />
        </Spacer>
        <Text>{searchQuery}</Text>
      </SafeContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
};
