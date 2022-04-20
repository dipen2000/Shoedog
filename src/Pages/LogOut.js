import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useEffect } from "react";
const LogOut = () => {
  const { setIsAuth, setToken } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    setIsAuth(false);
    setToken("");
    localStorage.setItem("token", "");
    localStorage.setItem("isAuth", false);
  }, []);
  return (
    <>
      <div className="logout-page flex-col align-center-flex justify-center-flex">
        <div className="flex-col">
          <div className="flex-col align-center-flex justify-center-flex">
            <i class="fa-solid fa-circle-check"></i>
            <h2 className="heading-2">
              You have been successfully logged out.
            </h2>
          </div>
        </div>
        <button
          className="curs-point btn btn-primary-solid shoetube-btn-main"
          onClick={() => navigate("/")}
        >
          Go back to home
        </button>
      </div>
    </>
  );
};

export { LogOut };
