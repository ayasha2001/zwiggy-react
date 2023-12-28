import { createContext } from "react";

const CartContext = createContext({
  items: [],
  count: 0,
  onItemAdd: (item) => {},
  onDeleteItem: (id) => {},
});

export default CartContext;
