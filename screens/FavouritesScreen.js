import React from "react";
import MealList from "../components/shared/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/shared/DefaultText";

const FavouritesScreen = props => {
  const favMeal = useSelector(state => state.meals.favouriteMeals);

  if (favMeal.length === 0 || !favMeal) {
    return (
      <View style={styles.content}>
        <DefaultText>
          No Favourite meals added yet. Start adding some.
        </DefaultText>
      </View>
    );
  }
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default FavouritesScreen;
