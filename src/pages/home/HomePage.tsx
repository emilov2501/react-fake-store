import React from "react";
import { Products } from "../../widgets";
import { AppBar, Icon, IconButton } from "../../core/ui";
import { Container, Row } from "react-bootstrap";
import { ProductSearch } from "../../features/products";

export const HomePage: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <AppBar
          actions={[<IconButton onPressed={() => {}} icon={Icon.burger} size={30} />]}
        >
          <ProductSearch />
        </AppBar>
        <Products />
      </Row>
    </Container>
  );
};
