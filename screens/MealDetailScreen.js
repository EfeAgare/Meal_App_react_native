import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';

export class MealDetailScreen extends Component {
  render() {

    const mealId = this.props.navigation.getParam('mealId');

    const selectMeal = MEALS.find(item => item.id === mealId);

    return (
      <View style={styles.screen}>
        <Text> {selectMeal.title} </Text>
        <Button
          title='Go Back to Categories'
          onPress={() => {
            this.props.navigation.popToTop();
            // this.props.navigation.pop();
          }}
        />
      </View>
    );
  }
}

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
  
    const selectMeal = MEALS.find(item => item.id === mealId);
  
    return {
      headerTitle: selectMeal.title
    };
  };

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
