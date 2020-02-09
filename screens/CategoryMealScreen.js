import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

export class CategoryMealScreen extends Component {
  renderMealItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate({
            routeName: 'MealDetails',
            params: { mealId: item.id }
          });
        }}
      >
        <View style={styles.screen}>
          <Text> {item.title} </Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const categoryId = this.props.navigation.getParam('categoryId');

    const displayMeals = MEALS.filter(
      meal => meal.categoryIds.indexOf(categoryId) >= 0
    );
    return (
      <FlatList
        data={displayMeals}
        keyExtractor={item => item.id}
        renderItem={this.renderMealItem}
      />
    );
  }
}

CategoryMealScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId');

  const selectCategory = CATEGORIES.find(item => item.id === categoryId);

  return {
    headerTitle: selectCategory.title
  };
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
