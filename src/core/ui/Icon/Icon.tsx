import Burger from "assets/burger.svg";
import React from "react";

type IconType = React.FC<React.ComponentProps<"svg">>;

interface Icons {
  burger: IconType;
}

export const Icon: Icons = {
  burger: (props) => <Burger {...props} />,
};
