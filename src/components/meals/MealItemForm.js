import React, { useContext, useState } from "react";
import "./MealItemForm.css";
import CartContext from "../../store/cart-context";

const MealItemForm = ({ id, meal }) => {
  const [itemCount, setItemCount] = useState("");
  const cartCntx = useContext(CartContext);

  const handleChange = (event) => {
    event.preventDefault();
    setItemCount(event.target.value);
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    if(itemCount.trim().length<=0){
      alert("set quantity")
      return;
    }
    cartCntx.onItemAdd({ ...meal, quantity: itemCount });
  };
  return (
    <>
      <div>
        <form className="form">
          <div className="input">
            <label>amount </label>
            <input
              type="number"
              min="1"
              value={itemCount}
              onChange={handleChange}
            />
          </div>
          <button className="btn" onClick={addItemHandler}>
            +Add
          </button>
        </form>
      </div>
    </>
  );
};

export default MealItemForm;
