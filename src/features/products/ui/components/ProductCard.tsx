import React from "react";
import Card from "react-bootstrap/Card";
import { ProductModel } from "../../domain/product.model";
import "./styles/ProductCard.styles.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
interface ProductCardProps {
  product: ProductModel;
  path: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  path,
  product: {
    image,
    title,
    price,
    rating: { count, rate },
  },
}) => {
  return (
    <Card className="product-card">
      <Link to={path}>
        <Card.Img variant="top" src={image} className="image" />
      </Link>
      <Card.Body>
        <Card.Title className="title">{title}</Card.Title>
        <Card.Text className="price">${price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Row className="justify-content-start">
          <Col xs="auto">
            <Card.Text className="rating-text">{count} sold</Card.Text>
          </Col>
          <Col xs="auto">
            <Card.Text className="rating-text">{rate} rating</Card.Text>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
