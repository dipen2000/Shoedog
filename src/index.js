import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ProductProvider } from "./context/productContext";
import { CategoryProvider } from "./context/categoryContext";
import { WishlistProvider } from "./context/wishlistContext";
import { CartProvider } from "./context/cartContext";
import { CouponProvider } from "./context/couponContext";
import { AddressProvider } from "./context/addressesContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <WishlistProvider>
            <CartProvider>
              <CategoryProvider>
                <CouponProvider>
                  <AddressProvider>
                    <App />
                  </AddressProvider>
                </CouponProvider>
              </CategoryProvider>
            </CartProvider>
          </WishlistProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
