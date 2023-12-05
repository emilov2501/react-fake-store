import { observer } from "mobx-react";
import React, { useCallback } from "react";
import { ProductStore } from "../store/product.store";
import { useStore } from "../../../../core/hooks/useStore";
import { useQuery } from "react-query";
import { ProductCard } from "./ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { ProductModel } from "../../domain/product.model";
import { generatePath, useLocation } from "react-router-dom";

const ProductListView: React.FC = () => {
  const loc = useLocation();

  const currentCategory = loc.state?.cat;

  const { isLoading, isError, getProductsByCategory, query, products } =
    useStore<ProductStore>("productStore");

  useQuery(["products", currentCategory], () =>
    getProductsByCategory({ category: currentCategory })
  );

  const toSearch = useCallback(
    (product: ProductModel) => {
      return product.title
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase());
    },
    [query]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Sory, something went wrong :(.</div>;
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

export const ProductList = observer(ProductListView);
