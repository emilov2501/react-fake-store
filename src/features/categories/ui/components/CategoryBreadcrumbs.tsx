import React from "react";
import { Link, useLocation } from "react-router-dom";

export const CategoryBreadcrumbs: React.FC = () => {
  const loc = useLocation();

  return (
    <div className="mt-3 mb-2">
      <Link to={"/"}>Products</Link> / {loc.state.cat || ""}
    </div>
  );
};
