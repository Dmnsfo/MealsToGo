import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const SText = styled(Text)`
  padding-top: 10px;
`;

const Container = styled(View)`
  flex: 1;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    //  icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    //   isOpenNow = true,
    rating = 4,
    //  isClosedTemporarely,
  } = restaurant;
  return (
    <>
      <Container>
        <Card>
          <Card.Title title={name} subtitle={address} />
          <Card.Cover
            source={{
              uri: photos[0],
            }}
          />
          <Card.Content>
            <SText variant="titleLarge">Rating:</SText>
            <Text variant="bodyMedium">{rating} stars</Text>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
};
