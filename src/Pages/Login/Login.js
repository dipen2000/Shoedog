import "./Login.css";
import { useState } from "react";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { InputField, PasswordField } from "../../Components/InputFields";
import { ButtonPrimary } from "../../Components/Buttons";
import { loginService } from "../../Services";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inputData, setInputData] = useState({
    input: {},
    hide: { pwd: true },
  });

  const { setIsAuth, setToken } = useAuth();

  const navigate = useNavigate();

  const guestLoginCredentials = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      input: { ...prevData.input, [name]: value },
    }));
  };

  const showHidePasswordHandler = () => {
    setInputData((prevData) => ({
      ...prevData,
      hide: { pwd: !prevData.hide.pwd },
    }));
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { encodedToken } = await loginService(inputData.input);
      setIsAuth(true);
      setToken(encodedToken);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", encodedToken);
      setInputData((prevData) => ({
        ...prevData,
        input: { email: "", password: "" },
      }));
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <ShoedogContainer>
      <section className="flex-row justify-center-flex login-page-container">
        <div className="login-section">
          <div className="flex-row justify-center-flex">
            <h2 className="auth-form-title">Login</h2>
          </div>
          <div className="flex-row justify-center-flex">
            <form onSubmit={loginHandler}>
              <div className="flex-col gap-1">
                <InputField
                  type={"email"}
                  fieldTitle={"Email"}
                  name={"email"}
                  fieldPlaceholder={"Enter your Email."}
                  onChange={inputChangeHandler}
                  value={inputData.input.email}
                  required={true}
                />
                <PasswordField
                  type={inputData.hide.pwd ? "password" : "text"}
                  fieldTitle={"Password"}
                  name={"password"}
                  fieldPlaceholder={"Enter your Password."}
                  onChange={inputChangeHandler}
                  value={inputData.input.password}
                  required={true}
                >
                  <div className="curs-point" onClick={showHidePasswordHandler}>
                    <i
                      className={`fa-solid ${
                        inputData.hide.pwd ? "fa-eye" : "fa-eye-slash"
                      }`}
                    ></i>
                  </div>
                </PasswordField>
                <div className="flex-col">
                  <div className="flex-row justify-center-flex">
                    <ButtonPrimary>Login</ButtonPrimary>
                  </div>
                  <div className="flex-row justify-center-flex">
                    <span>or</span>
                  </div>
                  <div className="flex-row justify-center-flex">
                    <ButtonPrimary
                      onClick={() => {
                        setInputData((prevData) => ({
                          ...prevData,
                          input: guestLoginCredentials,
                        }));
                      }}
                    >
                      Guest Login
                    </ButtonPrimary>
                  </div>
                </div>
                <div className="flex-row gap-1">
                  <span>New to SHOEDOG?</span>
                  <Link to="/signup" className="curs-point">
                    Signup
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </ShoedogContainer>
  );
};

export { Login };
