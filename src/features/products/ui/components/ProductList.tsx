import React, { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Container, Row } from "react-bootstrap";

import { ProductCard } from "./ProductCard";
import { ProductModel } from "../../domain/product.model";
import { generatePath, useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { DataStatus } from "../../../../core/constants/status";
import { Text } from "../../../../core/ui";

const ProductListView: React.FC = () => {
  const { category = "" } = useParams();

  const { status, getProductsByCategory, query, products } = useProductStore();

  useQuery({
    queryKey: ["products", category],
    queryFn: () => getProductsByCategory(category),
  });

  const toSearch = useCallback(
    (product: ProductModel) => {
      return product.title
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase());
    },
    [query]
  );

  if (status === DataStatus.loading) {
    return <Text>Loading...</Text>;
  }

  if (status === DataStatus.failure) {
    return <Text>Sory, something went wrong :(.</Text>;
  }

  return (
    <Container fluid>
      <Row xs={2} md={4} lg={6}>
        {products.filter(toSearch).map((product) => (
          <Col key={product.id} className="p-2">
            <ProductCard
              product={product}
              path={generatePath("/products/:productId", {
                productId: product.id.toString(),
              })}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export const ProductList = ProductListView;
