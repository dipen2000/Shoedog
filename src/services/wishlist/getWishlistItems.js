import axios from "axios";

const getWishlistItem = async (token) => {
  return await axios.get("/api/user/wishlist", {
    headers: { authorization: token },
  });
};

export { getWishlistItem };
