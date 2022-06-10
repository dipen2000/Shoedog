import axios from "axios";

const decrementQuantityService = async (token, productId) => {
  return await axios.post(
    `/api/user/cart/${productId}`,
    {
      action: {
        type: "decrement",
      },
    },
    {
      headers: { authorization: token },
    }
  );
};

export { decrementQuantityService };
