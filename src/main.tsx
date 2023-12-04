import "reflect-metadata";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { CategoryPage } from "./pages/category/CategoryPage.tsx";
import { ProductPage } from "./pages/product/ProductPage.tsx";

const clinet = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: true } },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={clinet}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route path="/" element={<CategoryPage />}></Route>
          <Route path="/categories/:category" element={<ProductPage />}></Route>
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);
