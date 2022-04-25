import { Routes, Route } from "react-router-dom";
import { Home, Cart, Product, Wishlist } from "../Pages";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product" element={<Product />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};

export { NavRoutes };
