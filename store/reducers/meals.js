import { Meals } from "../../data/dummy-data";

initailState = {
  meals: Meals,
  filteredMeals: Meals,
  favouriteMeals: []
};

const mealsReducers = (state = initailState, action) => {
  return state;
};

export default mealsReducers;
