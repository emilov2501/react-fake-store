import React, { useState } from "react";
import { AppBar, Icon, IconButton, Text } from "../../core/ui";
import { Container, Row } from "react-bootstrap";

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
            <Text>Categories</Text>
          </AppBar>
          <CategoryList />
        </Row>
      </Container>
    </div>
  );
};
