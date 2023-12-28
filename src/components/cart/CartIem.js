import React from "react";
import "./CartIem.css"

const CartIem = ({name,description,price}) => {
  return (
    <div className="meal">
      <div>
        <h3 className="name">{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{`$ ${price}`}</div>
      </div>
    </div>
  );
};

export default CartIem;
