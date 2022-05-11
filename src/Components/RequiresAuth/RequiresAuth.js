import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";
const RequiresAuth = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" replace />;
};

export { RequiresAuth };
