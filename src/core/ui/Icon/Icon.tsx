import React from "react";

import Burger from "assets/burger.svg";
import Filter from "assets/filter.svg";
import Close from "assets/close.svg";

type IconType = React.FC<React.ComponentProps<"svg">>;

interface Icons {
  burger: IconType;
  filter: IconType;
  close: IconType;
}

export const Icon: Icons = {
  burger: (props) => <Burger {...props} />,
  filter: (props) => <Filter {...props} />,
  close: (props) => <Close {...props} />,
};
