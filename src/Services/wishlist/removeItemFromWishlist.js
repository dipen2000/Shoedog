import axios from "axios";

const removeItemFromWishlist = async (token, productId) => {
  return await axios.delete(`/api/user/wishlist/${productId}`, {
    headers: { authorization: token },
  });
};

export { removeItemFromWishlist };
