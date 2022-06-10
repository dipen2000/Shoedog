// import { ACTIONS } from "../../constants/actions";
// import { useWishlist } from "../../context/wishlistContext";
// import { removeItemFromWishlist } from "../../Services/wishlist/removeItemFromWishlist";
// import { addItemToWishlist } from "../../Services/wishlist/addItemToWishlist";
// const { wishlistState, wishlistDispatch } = useWishlist();
// const toggleWishlist = async (product) => {
//   if (wishlistState.find((item) => item._id === product._id)) {
//     try {
//       const { data, status } = await removeItemFromWishlist(token, product._id);

//       if (status === 200) {
//         wishlistDispatch({
//           type: ACTIONS.SET_WISHLIST,
//           payload: { data: data.wishlist },
//         });
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   } else {
//     try {
//       const { data, status } = await addItemToWishlist(token, product);

//       if (status === 200) {
//         wishlistDispatch({
//           type: ACTIONS.SET_WISHLIST,
//           payload: { data: data.wishlist },
//         });
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   }
// };

// export { toggleWishlist };
