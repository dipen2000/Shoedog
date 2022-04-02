import axios from "axios";

const signupService = async (signupInput) => {
  const { data } = await axios.post("/api/auth/signup", signupInput);
  return data;
};

export { signupService };
