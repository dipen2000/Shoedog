import { Navbar } from "../Components/Navbar/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signupService } from "../services/signupService";
import { useAuth } from "../context/auth-context";
const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    input: {},
    error: "",
    hide: { pwd: true, confPwd: true },
  });
  const { setIsAuth, setToken, navigate } = useAuth();

  const signUpInputHandler = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      input: { ...signUpData.input, [name]: value },
    });
  };

  const signUpSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { encodedToken } = await signupService(signUpData.input);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", encodedToken);
      setToken(encodedToken);
      setIsAuth(true);
      setSignUpData({ ...signUpData, input: "" });
      navigate("/");
    } catch (err) {
      setSignUpData({ ...signUpData, error: "The user already exists!!" });
    }
  };
  return (
    <>
      <Navbar />
      <h2>Sign up</h2>
      <form onSubmit={signUpSubmitHandler}>
        <div>{signUpData.error}</div>
        <input
          type="text"
          placeholder="Enter your first name here."
          name="firstName"
          onChange={signUpInputHandler}
          value={signUpData.input.firstName}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your last name here."
          name="lastName"
          onChange={signUpInputHandler}
          value={signUpData.input.lastName}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your email here."
          onChange={signUpInputHandler}
          value={signUpData.input.email}
        />
        <br />
        <input
          type={signUpData.hide.pwd ? "password" : "text"}
          name="password"
          placeholder="Enter your password here."
          onChange={signUpInputHandler}
          value={signUpData.input.password}
        />
        <span
          className="curs-point"
          onClick={() =>
            setSignUpData({
              ...signUpData,
              hide: { ...signUpData.hide, pwd: !signUpData.hide.pwd },
            })
          }
        >
          {signUpData.hide.pwd ? "Show" : "Hide"}
        </span>
        <br />
        <input
          type={signUpData.hide.confPwd ? "password" : "text"}
          name="ConfirmPassword"
          placeholder="Enter your password again here."
          onChange={signUpInputHandler}
          value={signUpData.input.ConfirmPassword}
        />
        <span
          className="curs-point"
          onClick={() =>
            setSignUpData({
              ...signUpData,
              hide: { ...signUpData.hide, confPwd: !signUpData.hide.confPwd },
            })
          }
        >
          {signUpData.hide.confPwd ? "Show" : "Hide"}
        </span>
        <br />
        {signUpData.input.password !== signUpData.input.ConfirmPassword && (
          <div>The passwords do not match.</div>
        )}

        <button>Create new account</button>
        <br />
        <div>
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </form>
    </>
  );
};

export { SignUp };
