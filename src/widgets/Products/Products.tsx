import React from "react";
import { Container, Row } from "react-bootstrap";

import { ProductList } from "../../features/products";
import { CategoryBreadcrumbs } from "../../features/categories";
import { ThemeSwitcher } from "../../features/settings";

import "./Products.css";

export const Products: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <div className="top-header">
          <CategoryBreadcrumbs />
          <ThemeSwitcher />
        </div>
        <ProductList />
      </Row>
    </Container>
  );
};
