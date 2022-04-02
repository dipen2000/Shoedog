import { useContext } from "react";
import { productContext } from "../context/product-context";
const useProduct = () => useContext(productContext);
export { useProduct };
