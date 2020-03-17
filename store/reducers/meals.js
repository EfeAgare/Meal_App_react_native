import { Meals } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE, SET_FILTERS } from "../actions/meals";

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
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filters(meals => {
        if (appliedFilters.gluttenFree && !meal.isGluttenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: filteredMeals };
    default:
      return state;
  }
};

export default mealsReducers;
