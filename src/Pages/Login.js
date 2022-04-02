import "./authentication.css";
import { useState } from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { useAuth } from "../context/auth-context";
import { loginService } from "../services/loginService";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginInput, setLoginInput] = useState({
    input: {},
    error: "",
    hide: { pwd: true },
  });
  const { setIsAuth, setToken, navigate } = useAuth();

  const loginInputHandler = (e) => {
    const { name, value } = e.target;
    setLoginInput({
      ...loginInput,
      input: { ...loginInput.input, [name]: value },
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { encodedToken } = await loginService(loginInput.input);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", encodedToken);
      setToken(encodedToken);

      setLoginInput({ ...loginInput, input: { email: "", password: "" } });
      setIsAuth(true);

      navigate(-1);
    } catch (err) {
      setLoginInput({
        ...loginInput,
        error: "You must have entered wrong credentials!!",
      });
    }
  };
  return (
    <>
      <Navbar />
      <h1>Login</h1>
      <div className="form-container">
        <form onSubmit={loginHandler}>
          <div>{loginInput.error}</div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email here"
            onChange={loginInputHandler}
            value={loginInput.input.email}
            required
          />
          <br />
          <input
            type={loginInput.hide.pwd ? "password" : "text"}
            name="password"
            placeholder="Enter your password here"
            onChange={loginInputHandler}
            value={loginInput.input.password}
            required
          />
          <span
            onClick={() =>
              setLoginInput({
                ...loginInput,
                hide: { pwd: !loginInput.hide.pwd },
              })
            }
          >
            {loginInput.hide.pwd ? "Show" : "Hide"}
          </span>
          <br />
          <button>Log in</button>
          <br />
          <button
            type="submit"
            onClick={() =>
              setLoginInput({
                ...loginInput,
                input: {
                  email: "adarshbalika@gmail.com",
                  password: "adarshbalika",
                },
              })
            }
          >
            Guest login
          </button>
          New to SHOEDOG? <Link to="/signup">Sign up here.</Link>
        </form>
      </div>
    </>
  );
};

export { Login };
