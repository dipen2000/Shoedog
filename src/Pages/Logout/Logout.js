import "./Logout.css";
import { useAuth } from "../../context/authContext";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { Link } from "react-router-dom";
const Logout = () => {
  const { setIsAuth, setToken } = useAuth();
  setIsAuth(false);
  setToken("");
  localStorage.clear();
  return (
    <ShoedogContainer>
      <div className="flex-col logout-container justify-center-flex align-center-flex">
        <h2>You are successfully logged out</h2>
        <p>
          Go back to the{" "}
          <Link className="curs-point" to="/">
            Home page
          </Link>
        </p>
      </div>
    </ShoedogContainer>
  );
};

export { Logout };
