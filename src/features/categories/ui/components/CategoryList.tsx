import React from "react";
import { useQuery } from "@tanstack/react-query";

import { useStore } from "../../../../core/hooks/useStore";
import { CategoryStore } from "../../../categories/ui/store/category.store";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CategoryList: React.FC = () => {
  const { getCategories, categories } =
    useStore<CategoryStore>("categoryStore");

  useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <Row xs={1} className="mt-3">
      {categories.map((category, index) => (
        <Col key={index}>
          <Link
            to={`categories/${category.title}`}
            state={{ cat: category.title }}
          >
            {category.title}
          </Link>
        </Col>
      ))}
    </Row>
  );
};
