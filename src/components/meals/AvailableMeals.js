import React from "react";
import MealItem from "./MealItem";
import Card from "../ui/Card";
import "./AvailableMeals.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  return (
    <div className="meals">
      <Card>
        {DUMMY_MEALS.map((meal) => {
          return <MealItem key={meal.id} meal={meal} />;
        })}
      </Card>
    </div>
  );
};

export default AvailableMeals;
