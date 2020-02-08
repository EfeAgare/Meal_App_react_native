import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class CategoriesScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text> CategoriesScreen! </Text>
        <Button
          title='Go to Meals!'
          onPress={() => {
            this.props.navigation.navigate({ routeName: 'CategoryMeals' });
          }}
        />
      </View>
    );
  }
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
