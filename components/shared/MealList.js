import React from "react";
import { FlatList } from "react-native";
import MealItem from "../MealItem";
import { useSelector } from "react-redux";

const MealList = props => {
  const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

  const renderMealItem = ({ item }) => {
    const isFavourite = favouriteMeals.some(meal => meal.id === item.id)
    return (
      <MealItem
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: { mealId: item.id, mealTitle: item.title, isFav: isFavourite }
          });
        }}
        item={item}
      />
    );
  };
  return (
    <FlatList
      data={props.displayMeals}
      keyExtractor={item => item.id}
      renderItem={renderMealItem}
      style={{ width: "100%" }}
    />
  );
};

export default MealList;
