import React from "react";
import { View } from "react-native";
import { styled } from "styled-components/native";
import { theme } from "../../infrastructure/theme";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const getVariant = (size) => {
  const sizeValue = theme.space[sizeVariant[size]];

  return `marginLeft: ${sizeValue}; marginRight: ${sizeValue}`;
};

const SpacerView = styled(View)`
  ${({ variant }) => variant}
`;

export const SideSpacer = ({ size, children }) => {
  const variant = getVariant(size);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

SideSpacer.defaultProps = {
  size: "small",
};
