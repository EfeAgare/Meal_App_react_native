import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = ({ item }) => {
  return (
    <View style={styles.gridItem}>
      <Text>{item.title}</Text>
    </View>
  );
};
export class CategoriesScreen extends Component {
  render() {
    return (
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        renderItem={renderGridItem}
        keyExtractor={item => item.id}
      />
      // <View style={styles.screen}>
      //   <Text> CategoriesScreen! </Text>
      //   <Button
      //     title='Go to Meals!'
      //     onPress={() => {
      //       this.props.navigation.navigate({ routeName: 'CategoryMeals' });
      //     }}
      //   />
      // </View>
    );
  }
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
  }
});
