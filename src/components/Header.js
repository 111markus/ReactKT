import { useContext, useEffect } from "react";
import CartContext from "../store/CartContext.js";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button.js";

const Header = () => {
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    const itemQuantities = cartCtx.items.reduce((acc, item) => {
      acc[item.id] = (acc[item.id] || 0) + 1;
      return acc;
    }, {});

    const cartItemsWithQuantity = Object.values(
      cartCtx.items.reduce((acc, item) => {
        if (!acc[item.id]) {
          acc[item.id] = { ...item, quantity: itemQuantities[item.id] };
        }
        return acc;
      }, {}),
    );

    console.log("Cart items:", cartItemsWithQuantity);
  }, [cartCtx.items]);

  const totalItems = cartCtx.items.length;

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
