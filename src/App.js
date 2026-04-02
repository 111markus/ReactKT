import React, { useReducer } from "react";
import Header from "./components/Header.js";
import Meals from "./components/Meals.js";
import CartContext from "./store/CartContext.js";

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    );

    let updatedItems;

    if (existingCartItemIndex !== -1) {
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = {
        ...updatedItems[existingCartItemIndex],
        quantity: updatedItems[existingCartItemIndex].quantity + 1,
      };
    } else {
      updatedItems = [...state.items, { ...action.item, quantity: 1 }];
    }

    return { items: updatedItems };
  }

  return state;
};

const App = () => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  return (
    <>
      <CartContext.Provider
        value={{ items: cartState.items, addItem: addItemToCartHandler }}
      >
        <Header />
        <main>
          <Meals />
        </main>
      </CartContext.Provider>
    </>
  );
};

export default App;
