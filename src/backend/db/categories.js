import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Nike",
    categoryImg: "https://i.postimg.cc/JsvPh8Lc/nike-coll.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Adidas",
    categoryImg: "https://i.postimg.cc/qz7LXqBx/adidas-coll.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Puma",
    categoryImg: "https://i.postimg.cc/XG0G2Hf0/puma-coll.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Reebok",
    categoryImg: "https://i.postimg.cc/TyBqTJnk/reebok-coll.jpg",
  },
];
