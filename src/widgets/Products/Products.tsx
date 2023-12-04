import React from "react";
import { ProductList } from "../../features/products";
import { CategoryBreadcrumbs } from "../../features/categories";
import { ThemeSwitcher } from "../../features/settings";

import "./Products.css";
import { Container, Row } from "react-bootstrap";

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
