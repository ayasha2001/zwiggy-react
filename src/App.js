import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import AvailableMeals from "./components/meals/AvailableMeals";
import MealsSummary from "./components/meals/MealsSummary";

function App() {
  return (
    <>
      <Cart />
      <Header />
      {/* <MealsSummary /> */}
      <AvailableMeals />
      <Cart />
    </>
  );
}

export default App;
