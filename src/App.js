import { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import AvailableMeals from "./components/meals/AvailableMeals";
import MealsSummary from "./components/meals/MealsSummary";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const handleCartOpen = () => {
    setCartOpen(true);
  };
  const handleCartClose = () => {
    setCartOpen(false);
  };

  return (
    <>
      {isCartOpen && <Cart onClose={handleCartClose} />}
      <Header onOpen={handleCartOpen} />
      {/* <MealsSummary /> */}
      <AvailableMeals />
    </>
  );
}

export default App;
