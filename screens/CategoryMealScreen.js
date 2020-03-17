import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { StyleSheet, View } from "react-native";
import MealList from "../components/shared/MealList";

import { useSelector } from "react-redux";
import DefaultText from "../components/shared/DefaultText";

const CategoryMealScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (displayMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters</DefaultText>
      </View>
    );
  }
  return <MealList displayMeals={displayMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectCategory = CATEGORIES.find(item => item.id === categoryId);

  return {
    headerTitle: selectCategory.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default CategoryMealScreen;
