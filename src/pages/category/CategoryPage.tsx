import React, { useState } from "react";
import { AppBar, Icon, IconButton, Scaffold, Text } from "../../core/ui";
import { Container, Row } from "react-bootstrap";

import { SideBar } from "../../widgets/Sidebar";
import { CategoryList } from "../../features/categories";

export const CategoryPage: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <SideBar
        show={show}
        appBarTitle="Menu"
        close={() => setShow(false)}
        items={["Profile", "Cart", "Settings", "Log out"]}
      />

      <Scaffold
        appBar={
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
        }
        body={
          <Container fluid>
            <Row>
              <CategoryList />
            </Row>
          </Container>
        }
      />
    </>
  );
};
