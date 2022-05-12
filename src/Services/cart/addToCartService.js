import axios from "axios";

const addToCartService = async (token, product) => {
  return await axios.post(
    "/api/user/cart",
    { product },
    {
      headers: { authorization: token },
    }
  );
};

export { addToCartService };
