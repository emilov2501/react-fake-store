import React, { useState } from "react";
import { Products } from "../../widgets/Products";
import { AppBar, Icon, IconButton, Scaffold } from "../../core/ui";
import { ProductSearch } from "../../features/products";
import { SideBar } from "../../widgets/Sidebar";

export const ProductPage: React.FC = () => {
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
            <ProductSearch />
          </AppBar>
        }
        body={<Products />}
      />
    </>
  );
};
