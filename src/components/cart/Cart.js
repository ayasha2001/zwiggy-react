import React, { useContext } from "react";
import "./Cart.css";
import Modal from "../ui/Modal";
import CartContext from "../../store/cart-context";
import CartIem from "./CartIem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  return (
    <Modal onClose={props.onClose}>
      <h3>Cart Item</h3>
      <div>
        {ctx.items.map((item) => {
          return (
            <CartIem
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              item={item}
            />
          );
        })}
      </div>
      <div className="total">
        <span>Your total amount is</span>
        <span>{`$ ${ctx.price}`} </span>
      </div>
      <div className="actions">
        <button className=".button--alt" onClick={props.onClose}>
          Close
        </button>
        <button className=".button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
