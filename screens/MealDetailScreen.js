import React, { useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/shared/DefaultText";
import { toggleFavourite } from "../store/actions/meals";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");

  const availableMeals = useSelector(state => state.meals.meals);
  const selectMeal = availableMeals.find(item => item.id === mealId);

  const isCurrentMealFavourite = useSelector(state =>
    state.meals.favouriteMeals.some(meal => meal.id === mealId)
  );

  const dispatch = useDispatch();

  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, [toggleFavouriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFavourite: isCurrentMealFavourite });
  }, [isCurrentMealFavourite]);

  return (
    <ScrollView>
      <Button
        style={styles.button}
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
          // this.props.navigation.pop();
        }}
      />
      <Image source={{ uri: selectMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectMeal.duration}</DefaultText>
        <DefaultText>{selectMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const toggleFavourite = navigationData.navigation.getParam("toggleFav");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const isFavourite = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName={isFavourite ? "ios-star" : "ios-star-outline"}
          onPress={() => toggleFavourite}
        />
      </HeaderButtons>
    )
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 10
  },
  button: {
    marginBottom: 10
  },
  listItem: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10
  }
});
