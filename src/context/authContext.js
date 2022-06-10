import { createContext, useState, useContext, useEffect } from "react";

const authContext = createContext();

const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  let initialAuthVal = localStorage.getItem("isAuth");
  let initialToken = localStorage.getItem("token");

  const [isAuth, setIsAuth] = useState(initialAuthVal || false);
  const [token, setToken] = useState(initialToken || "");
  return (
    <authContext.Provider value={{ isAuth, setIsAuth, token, setToken }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
