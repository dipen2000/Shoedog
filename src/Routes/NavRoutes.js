import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Cart } from "../Pages/Cart";
import { Product } from "../Pages/Product";
import { Wishlist } from "../Pages/Wishlist";
import Mockman from "mockman-js";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/mock" element={<Mockman />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product" element={<Product />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};

export { NavRoutes };
