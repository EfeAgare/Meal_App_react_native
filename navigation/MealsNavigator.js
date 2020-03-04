import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FavouritesScreen from "../screens/FavouritesScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetails: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-restaurant' size={30} color={tabInfo.tintColor}/>;
      }
    }
  },
  Favourites: {
    screen: FavouritesScreen,
  navigationOptions: {
    tabBarLabel: 'Favorites!',
    tabBarIcon: tabInfo => {
      return <Ionicons name='ios-star' size={30} color={tabInfo.tintColor}/>
    }
  } }
}, {
  tabBarOptions: {
    activeTintColor: Colors.accentColor
  }
});
export default createAppContainer(MealsFavTabNavigator);
