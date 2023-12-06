import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import "./styles/ProductDetail.styles.css";
import { Text } from "../../../../core/ui";
import { useProductStore } from "../store/product.controller";
import { DataStatus } from "../../../../core/constants/status";

const ProductDetailView: React.FC = () => {
  const { productId } = useParams();
  const id = parseInt(productId || "-1");

  const { getProductById, product, status } = useProductStore();

  useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  if (status === DataStatus.loading) {
    return <div>Loading...</div>;
  }

  if (status === DataStatus.failure) {
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

export const ProductDetail = ProductDetailView;
