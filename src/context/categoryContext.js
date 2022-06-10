import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const categoryContext = createContext();
const useCategory = () => useContext(categoryContext);
const CategoryProvider = ({ children }) => {
  const [categoriesState, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios("/api/categories");
        setCategories(data.categories);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <categoryContext.Provider
      value={{ categoriesState, selectedCategory, setSelectedCategory }}
    >
      {children}
    </categoryContext.Provider>
  );
};

export { CategoryProvider, useCategory };
