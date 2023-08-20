import React, { useState, useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text, View, FlatList } from "react-native";
import { ActivityIndicator, MD2Colors, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeContainer } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

const SearchBox = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingBottom: 80,
    paddingHorizontal: 4,
  },
})``;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const { error, isLoading, restaurants } = useContext(RestaurantContext);
  return (
    <>
      <SafeContainer>
        {isLoading && (
          <LoadingContainer>
            <Loading animating={true} color="#FF6347" size={40} />
          </LoadingContainer>
        )}
        <SearchBox>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchBox>
        <Spacer position="horizontal" size="medium">
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
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
