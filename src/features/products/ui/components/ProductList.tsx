import { observer } from "mobx-react";
import React from "react";
import { ProductStore } from "../store/product.store";
import { useStore } from "../../../../core/hooks/useStore";
import { useQuery } from "react-query";
import { ProductCard } from "./ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductListView: React.FC = () => {
  const { isLoading, isError, getProducts, products } =
    useStore<ProductStore>("productStore");

  useQuery("products", getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Sory, something went wrong :(.</div>;
  }

  return (
    <Container>
      <Row xs={2} md={4} lg={6}>
        {products.map((product) => (
          <Col key={product.id} className="p-2">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export const ProductList = observer(ProductListView);
