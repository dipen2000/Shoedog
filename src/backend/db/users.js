import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Dipen",
    lastName: "Chavda",
    email: "dipenchavda123@gmail.com",
    password: "dipenchavda123",
    addresses: [
      {
        _id: uuid(),
        name: "Dipen Chavda",
        street: "plot 5",
        city: "Bangalore",
        zip: "530068",
        state: "Karnataka",
        Country: "India",
        mobile: "9999999999",
      },
      {
        _id: uuid(),
        name: "Milind Bhadja",
        street: "plot 6",
        city: "Bangalore",
        zip: "530068",
        state: "Karnataka",
        Country: "India",
        mobile: "9999988888",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
