import React from "react";
import { ProductList } from "../../features/products";
import { CategoryBreadcrumbs } from "../../features/categories";


import "./Products.css";
import { Container, Row } from "react-bootstrap";
import { ThemeSwitcher } from "../../core/config/theme";


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
