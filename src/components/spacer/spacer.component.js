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
};

const getVariant = (position, size) => {
  const sizeValue = theme.space[sizeVariant[size]];
  const positionValue = positionVariant[position];

  return `${positionValue}: ${sizeValue}`;
};

export const Spacer = styled(View)`
  ${({ position, size }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
