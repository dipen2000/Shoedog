import axios from "axios";

const addItemToWishlist = async (token, product) => {
  return await axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: token } }
  );
};

export { addItemToWishlist };
