import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeContainer } from "../../../components/utility/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Text } from "../../../components/typography/text.component";

const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingBottom: 80,
    paddingHorizontal: 4,
  },
})``;

const FavouritesArea = styled(SafeContainer)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <>
      <SafeContainer>
        <Spacer position="horizontal" size="medium">
          <FavouritesList
            data={favourites}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
          />
        </Spacer>
      </SafeContainer>
      <ExpoStatusBar style="auto" />
    </>
  ) : (
    <FavouritesArea>
      <Text variant="centeredBody">No Favourites Yet</Text>
    </FavouritesArea>
  );
};
