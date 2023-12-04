import React, { useState } from "react";
import { AppBar, Icon, IconButton } from "../../core/ui";
import { Container, Row } from "react-bootstrap";
import { ProductSearch } from "../../features/products";
import { SideBar } from "../../widgets/Sidebar";
import { CategoryList } from "../../features/categories";

export const CategoryPage: React.FC = () => {
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
          <CategoryList />
        </Row>
      </Container>
    </div>
  );
};
