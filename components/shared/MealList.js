import React from "react";
import { FlatList } from "react-native";
import MealItem from '../MealItem';

const MealList = props => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: { mealId: item.id }
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
