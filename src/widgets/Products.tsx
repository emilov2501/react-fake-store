import React from "react";
import { ProductList, ProductSearch } from "../features/products";
import { Container, Row } from "react-bootstrap";

export const Products: React.FC = () => {
  return (
    <Container>
      <Row>
        <div className="p-2 pb-1">
          <ProductSearch />
        </div>
        <ProductList />
      </Row>
    </Container>
  );
};
