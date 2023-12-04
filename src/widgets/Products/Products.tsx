import React from "react";
import { Container, Row } from "react-bootstrap";

import { ProductList } from "../../features/products";
import { CategoryBreadcrumbs } from "../../features/categories";

export const Products: React.FC = () => {
  return (
    <Container>
      <Row>
        <CategoryBreadcrumbs />
        <ProductList />
      </Row>
    </Container>
  );
};
