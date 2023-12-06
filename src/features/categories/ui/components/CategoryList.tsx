import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCategoryStore } from "../store/useCategoryStore";

export const CategoryList: React.FC = () => {
  const { getCategories, categories } = useCategoryStore();

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
