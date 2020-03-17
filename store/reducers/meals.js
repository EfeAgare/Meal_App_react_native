import { Meals } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE } from "../actions/meals";

initailState = {
  meals: Meals,
  filteredMeals: Meals,
  favouriteMeals: []
};

const mealsReducers = (state = initailState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const index = state.favouriteMeals.findIndex(
        meal => meal.id === action.mealId
      );

      if (index >= 0) {
        const updateFavMeals = [...state.favouriteMeals];
        updateFavMeals.splice(index, 1);
        return { ...state, favouriteMeals: updateFavMeals };
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
      }
    default:
      return state;
  }
};

export default mealsReducers;
