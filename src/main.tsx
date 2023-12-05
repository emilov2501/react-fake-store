import "reflect-metadata";

import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CategoryPage } from "./pages/category/CategoryPage.tsx";
import { ProductsPage } from "./pages/product/ProductsPage.tsx";
import { ProductDetailPage } from "./pages/product/ProductDetailPage.tsx";

import "./theme.css";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";

const clinet = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={clinet}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route path="/" element={<CategoryPage />}></Route>
          <Route
            path="/categories/:category"
            element={<ProductsPage />}
          ></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetailPage />}
          ></Route>
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);
