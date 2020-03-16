import React, { Component } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/shared/MealList";
const CategoryMealScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");

  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );
  return <MealList displayMeals={displayMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectCategory = CATEGORIES.find(item => item.id === categoryId);

  return {
    headerTitle: selectCategory.title
  };
};

export default CategoryMealScreen;
