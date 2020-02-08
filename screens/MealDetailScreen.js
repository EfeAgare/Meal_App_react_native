import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class MealDetailScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text> MealDetailScreen </Text>
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

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
