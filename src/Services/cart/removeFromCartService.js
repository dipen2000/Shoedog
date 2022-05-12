import axios from "axios";

const removeFromCartService = async (token, productId) => {
  return await axios.delete(`/api/user/cart/${productId}`, {
    headers: { authorization: token },
  });
};

export { removeFromCartService };
