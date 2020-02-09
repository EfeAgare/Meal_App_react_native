import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

export class CategoryMealScreen extends Component {

 
  render() {

    const categoryId = this.props.navigation.getParam('categoryId')

    const selectCategory = CATEGORIES.find(item => item.id === categoryId)

    return (
      <View style={styles.screen}>
        <Text> CategoryMealScreen </Text>
        <Button
          title='Go to Meal Details!'
          onPress={() => {
            this.props.navigation.navigate('MealDetails');
          }}
        />
      </View>
    );
  }
}


CategoryMealScreen

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
