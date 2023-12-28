import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let totalCount = 0;
    let totalPrice = 0;

    items.forEach((item) => {
      totalCount += Number(item.quantity);
      totalPrice += Number(item.quantity) * Number(item.price);
    });

    setCount(totalCount);
    setPrice(totalPrice);
  }, [items]);

  const itemAddHandler = (newItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                quantity: Number(newItem.quantity),
              }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const increaseItem = (newItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                quantity: Number(newItem.quantity)+1,
              }
            : item
        );
      } 
    });
  };

  const itemDeleteHandler = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                Number(item.quantity) > 1 ? Number(item.quantity) - 1 : 1,
            }
          : item
      );
    });
  };
  const cartContext = {
    items: items,
    count: count,
    price: price,
    onItemAdd: itemAddHandler,
    onDeleteItem: itemDeleteHandler,
    incItem:increaseItem
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
