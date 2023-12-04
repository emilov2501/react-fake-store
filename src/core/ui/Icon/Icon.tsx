import React from "react";

import Burger from "assets/burger.svg";

type IconType = React.FC<React.ComponentProps<"svg">>;

interface Icons {
  burger: IconType;
}

export const Icon: Icons = {
  burger: (props) => <Burger {...props} />,
};
