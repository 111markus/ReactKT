import { useContext } from "react";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const NewPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(props.price);

  const handleAddToCart = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      description: props.description,
      image: props.image,
    });
  };

  return (
    <li className="meal-item">
      <article>
        <img src={require(`../assets/${props.image}`)} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <p className="meal-item-price">{NewPrice}</p>
          <p className="meal-item-description">{props.description}</p>
        </div>
        <div className="meal-item-actions">
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
