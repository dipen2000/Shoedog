import axios from "axios";

const getCartItems = async (token) => {
  return await axios.get("/api/user/cart", {
    headers: { authorization: token },
  });
};

export { getCartItems };
