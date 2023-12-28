import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let totalCount = 0;
    items.forEach((item) => {
      totalCount += Number(item.quantity);
    });
    setCount(totalCount);
  }, [items]);

  useEffect(() => {
    let totalPrice = 0;
    items.forEach((item) => {
        totalPrice += Number(item.quantity) * Number(item.price);
    });
    setPrice(totalPrice);
  }, [items]);

  const itemAddHandler = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  const itemDeleteHandler = (id) => {};
  const cartContext = {
    items: items,
    count: count,
    price: price,
    onItemAdd: itemAddHandler,
    onDeleteItem: itemDeleteHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
