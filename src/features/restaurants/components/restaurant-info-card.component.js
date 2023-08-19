import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100, some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarely = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  ratingArray.forEach((element, index) => {
    ratingArray[index] = index;
  });

  return (
    <>
      <RestaurantCard>
        <RestaurantCardCover
          source={{
            uri: photos[0],
          }}
        />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((number) => (
                <SvgXml xml={star} width={20} height={20} key={number} />
              ))}
            </Rating>
            <SectionEnd>
              <Spacer position="left" size="medium">
                {isClosedTemporarely && (
                  <Text variant="error">CLOSED TEMPORARELY </Text>
                )}
              </Spacer>
              <Spacer position="left" size="medium">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon src={icon} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
