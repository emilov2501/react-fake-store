import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import { useStore } from "../../../../core/hooks/useStore";
import { ProductStore } from "../store/product.store";

import "./styles/ProductDetail.styles.css";
import { Text } from "../../../../core/ui";

const ProductDetailView: React.FC = () => {
  const { productId } = useParams();
  const id = parseInt(productId || "-1");

  const { getProductById, product, isLoading, isError } =
    useStore<ProductStore>("productStore");

  useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className="product-detail pt-3">
      {product && (
        <>
          <div className="image-wrapper">
            <img className="image" src={product!.image}></img>
          </div>

          <div className="body pt-3">
            <Text>
              <Text weight={600}>Name:</Text> {product!.title}
            </Text>
            <br />
            <br />
            <Text>
              <Text weight={600}>Price:</Text> {product!.price}
            </Text>
          </div>
        </>
      )}
    </div>
  );
};

export const ProductDetail = observer(ProductDetailView);
