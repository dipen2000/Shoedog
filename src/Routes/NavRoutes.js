import { Routes, Route } from "react-router-dom";
import { Home, Cart, Product, Wishlist, Login, Signup, Logout } from "../Pages";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product" element={<Product />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export { NavRoutes };
