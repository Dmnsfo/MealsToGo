import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[0]};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[1]};
`;

const Container = styled(View)`
  flex: 1;
`;

const Rating = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[0]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    //  icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100, some random street",
    //   isOpenNow = true,
    rating = 4,
    //  isClosedTemporarely,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <Container>
        <Card>
          <Card.Cover
            source={{
              uri: photos[0],
            }}
          />
          <Title>{name}</Title>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Address variant="titleLarge">{address}</Address>
        </Card>
      </Container>
    </>
  );
};
