import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class CategoryMealScreen extends Component {
  render() {
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

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
