import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Text } from "../../../../core/ui";

export const CategoryBreadcrumbs: React.FC = () => {
  const loc = useLocation();

  return (
    <div className="mt-3 mb-2">
      <Link to={"/"}>Categories</Link>
      <Text>
        {" /"} {loc.state.cat || ""}
      </Text>
    </div>
  );
};
