import "./Logout.css";
import { useAuth } from "../../context/authContext";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { Link, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../Components/Buttons";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
const Logout = () => {
  const { setIsAuth, setToken } = useAuth();
  setIsAuth(false);
  setToken("");
  localStorage.clear();
  useEffect(() => {
    toast("User logged out.", {
      icon: "✅",
      style: {
        borderRadius: "0",
        boxShadow: "4px 4px var(--navbar-bg-color)",
        background: "black",
        color: "#fff",
      },
    });
  }, []);
  const navigate = useNavigate();
  return (
    <ShoedogContainer>
      <div className="flex-col logout-container justify-center-flex align-center-flex">
        <i class="fa-solid fa-circle-check"></i>
        <h2>You are successfully logged out</h2>
        <ButtonPrimary
          onClick={() => {
            navigate("/");
          }}
        >
          Go back home
        </ButtonPrimary>
      </div>
    </ShoedogContainer>
  );
};

export { Logout };
