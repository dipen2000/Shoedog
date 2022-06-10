import axios from "axios";
const loginService = async (inputData) => {
  const { data } = await axios.post("/api/auth/login", inputData);
  return data;
};

export { loginService };
