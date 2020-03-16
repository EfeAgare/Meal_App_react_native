import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");

  const selectMeal = MEALS.find(item => item.id === mealId);

  return (
    <View style={styles.screen}>
      <Text> {selectMeal.title} </Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
          // this.props.navigation.pop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");

  const selectMeal = MEALS.find(item => item.id === mealId);

  return {
    headerTitle: selectMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => console.log("working")}
        />
      </HeaderButtons>
    )
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
