import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import React from "react";

const SafeAreaWithNoStatusBar = styled(SafeAreaView)`
  flex: 1;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const SafeContainer = ({ variant, children }) => {
  if (variant === "null") {
    return <SafeAreaWithNoStatusBar>{children}</SafeAreaWithNoStatusBar>;
  } else if (variant === "yes") {
    return <SafeArea variant={variant}>{children}</SafeArea>;
  }
};

SafeContainer.defaultProps = {
  variant: "yes",
};

//${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
