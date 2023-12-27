import React from "react";
import "./MealItem.css";

const MealItem = ({ meal }) => {
  const { name, description, price } = meal;
  return (
    <>
      <div className="meal">
        <div>
          <h3 className="name">{name}</h3>
          <div className="description">{description}</div>
          <div className="price">{`$ ${price}`}</div>
        </div>
      </div>
    </>
  );
};

export default MealItem;
