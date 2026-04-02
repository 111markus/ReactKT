import { useEffect, useState } from "react";
import MealItem from "./MealItem.js";
import "../index.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("http://localhost:3001/meals");
        if (!response.ok) {
          throw new Error("Failed to fetch meals.");
        }
        const data = await response.json();
        console.log(data);
        setMeals(data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem
          key={meal.id}
          name={meal.name}
          price={meal.price}
          description={meal.description}
          image={meal.image}
        />
      ))}
    </ul>
  );
};

export default Meals;
