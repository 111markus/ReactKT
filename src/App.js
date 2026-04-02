import Header from "./components/Header.js";
import Meals from "./components/Meals.js";
import { CartProv } from "./store/CartContext.js";

const App = () => {
  return (
    <>
      <CartProv>
        <Header />
        <main>
          <Meals />
        </main>
      </CartProv>
    </>
  );
};

export default App;
