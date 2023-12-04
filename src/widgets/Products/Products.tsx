import React from "react";
import { ProductList } from "../../features/products";
import { Container, Row } from "react-bootstrap";

export const Products: React.FC = () => {
  return (
    <Container>
      <Row>
        <ProductList />
      </Row>
    </Container>
  );
};
