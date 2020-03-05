import React from "react";
import MealList from "../components/shared/MealList";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = props => {
  const favMeal = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return <MealList displayMeals={favMeal} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = {
  headerTitle: "My Favourite Meal"
};

export default FavouritesScreen;
