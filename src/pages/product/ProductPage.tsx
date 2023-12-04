import React, { useState } from "react";
import { Products } from "../../widgets/Products";
import { AppBar, Icon, IconButton } from "../../core/ui";
import { Container, Row } from "react-bootstrap";
import { ProductSearch } from "../../features/products";
import { SideBar } from "../../widgets/Sidebar";

export const ProductPage: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <SideBar
        show={show}
        appBarTitle="Menu"
        close={() => setShow(false)}
        items={["Profile", "Cart", "Settings", "Log out"]}
      />
      <Container fluid>
        <Row>
          <AppBar
            actions={[
              <IconButton
                onPressed={() => setShow(!show)}
                icon={Icon.burger}
                size={30}
              />,
            ]}
          >
            <ProductSearch />
          </AppBar>
          <Products />
        </Row>
      </Container>
    </div>
  );
};
