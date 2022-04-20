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

      navigate("/");
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
      <div className="login-container flex-col justify-center-flex align-center-flex">
        <h1>Login</h1>
        <div className="form-size flex-col justify-center-flex align-center-flex">
          <form onSubmit={loginHandler} className="flex-col form-container">
            <div>{loginInput.error}</div>
            <input
              className="input-field"
              type="email"
              name="email"
              placeholder="Enter your email here"
              onChange={loginInputHandler}
              value={loginInput.input.email}
              required
            />
            <div className="flex-row">
              <input
                className="input-field"
                type={loginInput.hide.pwd ? "password" : "text"}
                name="password"
                placeholder="Enter your password here"
                onChange={loginInputHandler}
                value={loginInput.input.password}
                required
              />
              <span
                className="curs-point"
                onClick={() =>
                  setLoginInput({
                    ...loginInput,
                    hide: { pwd: !loginInput.hide.pwd },
                  })
                }
              >
                {loginInput.hide.pwd ? "Show" : "Hide"}
              </span>
            </div>
            <div className="flex-col login-page-btn-container justify-center-flex align-center-flex">
              <button className="curs-point btn btn-primary-solid shoetube-btn-main auth-btn">
                Log in
              </button>
              <h3 className="heading-3">or</h3>
              <button
                className="curs-point btn btn-primary-solid shoetube-btn-main auth-btn"
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
            </div>
            New to SHOEDOG?{" "}
            <Link className="link-ele" to="/signup">
              Sign up here.
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export { Login };
