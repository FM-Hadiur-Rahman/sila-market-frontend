import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import ToastProvider from "./components/common/ToastProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminAuthProvider>
        <CartProvider>
          <ToastProvider />
          <App />
        </CartProvider>
      </AdminAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
