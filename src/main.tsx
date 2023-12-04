import "reflect-metadata";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { HomePage } from "./pages/home/HomePage.tsx";

const clinet = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={clinet}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);
