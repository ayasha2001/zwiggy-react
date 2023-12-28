import React, { useContext } from "react";
import "./CartIem.css";
import CartContext from "../../store/cart-context";

const CartIem = ({ name, quantity, price, item }) => {
  const context = useContext(CartContext);
  const deleteItem = () => {
    context.onDeleteItem(item.id);
  };
  const addItem = () => {
    context.incItem(item);
  };
  return (
    <div className="meal">
      <div>
        <h3 className="name">{name}</h3>
        <div className="div-tag">
          <div className="price">{`$ ${price}`}</div>
          <label className="label">{`x ${quantity}`}</label>
        </div>
      </div>
      <div className="action">
        <button className=".button--alt" onClick={deleteItem}>
          -
        </button>
        <button className=".button" onClick={addItem}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartIem;
