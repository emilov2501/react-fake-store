import React from "react";
import { Container, Row } from "react-bootstrap";
import { ProductList } from "../../features/products";
import "./Products.css";

interface ProductsProps {
  top: React.ReactNode;
}

export const Products: React.FC<ProductsProps> = ({ top }) => {
  return (
    <Container fluid>
      <Row>
        {top}
        <ProductList />
      </Row>
    </Container>
  );
};
