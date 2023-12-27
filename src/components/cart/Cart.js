import React from "react";
import "./Cart.css";
import Modal from "../ui/Modal";

const Cart = () => {
  return (
    <Modal>
      <h3>Cart Item</h3>
      <div className="total">
        <span></span>
        <span></span>
      </div>
      <div className="actions">
        <button className=".button--alt">Close</button>
        <button className=".button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;