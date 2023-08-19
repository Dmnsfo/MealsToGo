import { SingleSpacer } from "./singlespacer.component";
import { SideSpacer } from "./sidespacer.component";
import React from "react";

export const Spacer = ({ type, children, size, position }) => {
  if (type === "sides") {
    return <SideSpacer size={size}>{children}</SideSpacer>;
  } else if (type === "single") {
    return (
      <SingleSpacer size={size} position={position}>
        {children}
      </SingleSpacer>
    );
  }
};

Spacer.defaultProps = {
  type: "sides",
  size: "small",
};
