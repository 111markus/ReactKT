import Button from "./UI/Button.js";

const MealItem = (props) => {
  const NewPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(props.price);

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
          <Button>Add to Cart</Button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
