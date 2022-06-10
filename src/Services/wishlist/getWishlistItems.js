import axios from "axios";

const getWishlistItems = async (token) => {
  return await axios.get("/api/user/wishlist", {
    headers: { authorization: token },
  });
};

export { getWishlistItems };
