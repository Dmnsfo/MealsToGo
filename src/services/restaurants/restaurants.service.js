import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarely: restaurant.business_status === "CLOSED_TEMPORARELY",
    };
  });
  return camelize(mappedResults);
};

restaurantsRequest()
  .then(restaurantTransform)
  .then((transformedResult) => console.log(transformedResult))
  .catch((err) => {
    console.log("error:", err);
  });
