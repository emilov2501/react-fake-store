import React, { useState } from "react";
import { Products } from "../../widgets/Products";
import { AppBar, Icon, IconButton, Scaffold } from "../../core/ui";
import { ProductSearch } from "../../features/products";
import { SideBar } from "../../widgets/Sidebar";
import { CategoryBreadcrumbs } from "../../features/categories";
import { ThemeSwitcher } from "../../features/settings";

export const ProductsPage: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      {/* Menu Sidebar */}
      <SideBar
        show={showMenu}
        appBarTitle="Menu"
        close={() => setShowMenu(false)}
        items={["Profile", "Cart", "Settings", "Log out"]}
      />

      {/* Filter Sidebar */}
      <SideBar
        slide="right"
        show={showFilter}
        appBarTitle="Filter"
        appBarAction={[
          <IconButton
            onPressed={() => setShowFilter(false)}
            icon={Icon.close}
            size={30}
          />,
        ]}
        close={() => setShowFilter(false)}
        items={[]}
      />

      <Scaffold
        appBar={
          <AppBar
            actions={[
              <IconButton
                onPressed={() => setShowMenu(!showMenu)}
                icon={Icon.burger}
                size={30}
              />,
            ]}
          >
            <ProductSearch />
          </AppBar>
        }
        body={
          <Products
            top={
              <div className="top-header">
                <CategoryBreadcrumbs />
                <div className="in">
                  <ThemeSwitcher />
                  <IconButton
                    size={30}
                    icon={Icon.filter}
                    onPressed={() => setShowFilter(!showFilter)}
                  />
                </div>
              </div>
            }
          />
        }
      />
    </>
  );
};
