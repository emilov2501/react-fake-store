import React from "react";
import Card from "react-bootstrap/Card";
import { ProductModel } from "../../domain/product.model";
import "./styles/ProductCard.styles.css";
interface ProductCardProps {
  product: ProductModel;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product: { image, title },
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} className="product_card-image" />
      <Card.Body>
        <Card.Title className="product_card-title">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
