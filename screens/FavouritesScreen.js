import React from "react";
import MealList from "../components/shared/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const FavouritesScreen = props => {
  const favMeal = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return <MealList displayMeals={favMeal} navigation={props.navigation} />;
};


FavouritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "My Favourite Meal",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};



export default FavouritesScreen;
