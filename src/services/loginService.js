import axios from "axios";

const loginService = async (loginInput) => {
  const res = await axios.post("/api/auth/login", loginInput);

  const { data } = res;
  return data;
};

export { loginService };
