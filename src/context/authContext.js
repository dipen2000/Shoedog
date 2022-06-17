import { createContext, useState, useContext, useEffect } from "react";

const authContext = createContext();

const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  let initialAuthVal = localStorage.getItem("isAuth");
  let initialToken = localStorage.getItem("token");
  let initialUser = JSON.parse(localStorage.getItem("user"));

  const [isAuth, setIsAuth] = useState(initialAuthVal || false);
  const [token, setToken] = useState(initialToken || "");
  const [user, setUser] = useState(initialUser || null);
  return (
    <authContext.Provider
      value={{ isAuth, setIsAuth, token, setToken, user, setUser }}
    >
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
