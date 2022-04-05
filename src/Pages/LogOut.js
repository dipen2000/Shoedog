import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useEffect } from "react";
const LogOut = () => {
  const { setIsAuth, setToken } = useAuth();
  useEffect(() => {
    setIsAuth(false);
    setToken("");
    localStorage.setItem("token", "");
    localStorage.setItem("isAuth", false);
  }, []);
  return (
    <>
      <div>You have been successfully logged out.</div>
      <Link to="/">Go back to home</Link>
    </>
  );
};

export { LogOut };
