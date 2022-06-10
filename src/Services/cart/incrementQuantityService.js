import axios from "axios";
const incrementQuantityService = async (token, productId) => {
  return await axios.post(
    `/api/user/cart/${productId}`,
    {
      action: {
        type: "increment",
      },
    },
    {
      headers: { authorization: token },
    }
  );
};

export { incrementQuantityService };
