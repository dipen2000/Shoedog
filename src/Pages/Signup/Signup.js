import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { InputField, PasswordField } from "../../Components/InputFields";
import { ButtonPrimary } from "../../Components/Buttons";
import { signupService } from "../../Services/auth/signupService";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAddress } from "../../context/addressesContext";
import "./Signup.css";
const Signup = () => {
  const { addressDispatch } = useAddress();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    input: {},
    hide: { pwd: true, confPwd: true },
  });

  const { setIsAuth, setToken, setUser } = useAuth();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      input: { ...prevData.input, [name]: value },
    }));
  };

  const shoeHidePasswordHandler = () => {
    setInputData((prevData) => ({
      ...prevData,
      hide: { ...prevData.hide, pwd: !prevData.hide.pwd },
    }));
  };

  const shoeHideConfirmPasswordHandler = () => {
    setInputData((prevData) => ({
      ...prevData,
      hide: { ...prevData.hide, confPwd: !prevData.hide.confPwd },
    }));
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const { encodedToken, createdUser } = await signupService(
        inputData.input
      );
      setIsAuth(true);
      setToken(encodedToken);
      setUser(createdUser);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("user", JSON.stringify(createdUser));
      setInputData((prevData) => ({
        ...prevData,
        input: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      }));
      toast(`Welcome ${createdUser.firstName}!`, {
        icon: "👏",
        style: {
          borderRadius: "0",
          boxShadow: "4px 4px var(--navbar-bg-color)",
          background: "black",
          color: "#fff",
        },
      });
      addressDispatch({
        type: ACTIONS.SET_ADDRESS_ARR,
        payload: { data: createdUser.addresses },
      });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ShoedogContainer>
      <section className="flex-row justify-center-flex signup-page-container">
        <div className="signup-section">
          <div className="flex-row justify-center-flex">
            <h2 className="auth-form-title">Signup</h2>
          </div>
          <div className="flex-row justify-center-flex">
            <form onSubmit={signUpHandler}>
              <div className="flex-col gap-1">
                <InputField
                  type={"text"}
                  fieldTitle={"First name"}
                  name={"firstName"}
                  fieldPlaceholder={"Enter your first name."}
                  onChange={inputChangeHandler}
                  value={inputData.input.firstName}
                  required={true}
                />
                <InputField
                  type={"text"}
                  fieldTitle={"Last Name"}
                  name={"lastName"}
                  fieldPlaceholder={"Enter your last name."}
                  onChange={inputChangeHandler}
                  value={inputData.input.lastName}
                  required={true}
                />
                <InputField
                  type={"email"}
                  fieldTitle={"Email"}
                  name={"email"}
                  fieldPlaceholder={"Enter your email."}
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
                  <div className="curs-point" onClick={shoeHidePasswordHandler}>
                    <i
                      className={`fa-solid ${
                        inputData.hide.pwd ? "fa-eye" : "fa-eye-slash"
                      }`}
                    ></i>
                  </div>
                </PasswordField>
                <PasswordField
                  type={inputData.hide.confPwd ? "password" : "text"}
                  fieldTitle={"Confirm Password"}
                  name={"confirmPassword"}
                  fieldPlaceholder={"Enter your Password again"}
                  onChange={inputChangeHandler}
                  value={inputData.input.confirmPassword}
                  required={true}
                >
                  <div
                    className="curs-point"
                    onClick={shoeHideConfirmPasswordHandler}
                  >
                    <i
                      className={`fa-solid ${
                        inputData.hide.confPwd ? "fa-eye" : "fa-eye-slash"
                      }`}
                    ></i>
                  </div>
                </PasswordField>
                <div className="flex-row justify-center-flex">
                  <div>
                    <button className="curs-point btn btn-primary-solid shoetube-btn-main">
                      Signup
                    </button>
                  </div>
                </div>
                {true &&
                  !(
                    inputData.input.password === inputData.input.confirmPassword
                  ) && <p>The passwords you entered does not match.</p>}
                <div className="flex-row gap-1">
                  <span>Already have an account?</span>
                  <Link
                    className="curs-point"
                    to="/login"
                    style={{ color: "var(--navbar-bg-color)" }}
                  >
                    Login
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

export { Signup };
