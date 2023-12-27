import React from "react";
import "./MealItemForm.css"

const MealItemForm = () => {
  return (
    <>
      <div>
        <form className="form">
          <div className="input">
            <label>amount </label>
            <input type="number" />
          </div>
          <button className="btn" type="submit">+Add</button>
        </form>
      </div>
    </>
  );
};

export default MealItemForm;
