import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

export class CategoryMealScreen extends Component {
  renderMealItem = ({ item }) => {
    return (
      <MealItem
        onSelectMeal={() => {
          this.props.navigation.navigate({
            routeName: 'MealDetails',
            params: { mealId: item.id }
          });
        }}
        item={item}
      />
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
        style={{ width: '100%' }}
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

