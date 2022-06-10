import axios from "axios";
const signupService = async (inputData) => {
  const { data } = await axios.post("/api/auth/signup", inputData);
  return data;
};

export { signupService };
