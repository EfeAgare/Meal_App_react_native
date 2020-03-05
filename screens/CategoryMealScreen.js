import React, { Component } from "react";
import { FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/shared/MealList";

export class CategoryMealScreen extends Component {
  
  render() {
    const categoryId = this.props.navigation.getParam("categoryId");

    const displayMeals = MEALS.filter(
      meal => meal.categoryIds.indexOf(categoryId) >= 0
    );
    return <MealList displayMeals={displayMeals} navigation={this.props.navigation}/>;
  }
}

CategoryMealScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectCategory = CATEGORIES.find(item => item.id === categoryId);

  return {
    headerTitle: selectCategory.title
  };
};

export default CategoryMealScreen;
