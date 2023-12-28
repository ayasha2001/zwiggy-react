import { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import AvailableMeals from "./components/meals/AvailableMeals";
import MealsSummary from "./components/meals/MealsSummary";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const handleCartOpen = () => {
    setCartOpen(true);
  };
  const handleCartClose = () => {
    setCartOpen(false);
  };

  return (
    <CartContextProvider>
      {isCartOpen && <Cart onClose={handleCartClose} />}
      <Header onOpen={handleCartOpen} />
      {/* <MealsSummary /> */}
      <AvailableMeals />
    </CartContextProvider>
  );
}

export default App;
