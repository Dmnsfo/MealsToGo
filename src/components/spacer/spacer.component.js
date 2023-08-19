import React from "react";
import { View } from "react-native";
import { styled } from "styled-components/native";
import { theme } from "../../infrastructure/theme";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  right: "marginRight",
  bottom: "marginBottom",
  left: "marginLeft",
  horizontal: "marginHorizontal",
  vertical: "marginVertical",
};

const getVariant = (position, size) => {
  const sizeValue = theme.space[sizeVariant[size]];
  const positionValue = positionVariant[position];

  return `${positionValue}: ${sizeValue};`;
};

const SpacerView = styled(View)`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const variant = getVariant(position, size);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
