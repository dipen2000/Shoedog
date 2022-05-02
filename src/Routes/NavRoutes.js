import { Routes, Route } from "react-router-dom";
import {
  Home,
  Cart,
  Product,
  Wishlist,
  Login,
  Signup,
  Logout,
  Page404,
} from "../Pages";
import Mockman from "mockman-js";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/mock" element={<Mockman />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product" element={<Product />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export { NavRoutes };
