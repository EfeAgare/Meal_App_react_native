import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../components/HeaderButton";

const CategoriesScreen = props => {
  const renderGridItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: { categoryId: item.id }
          });
        }}
        style={styles.gridItem}
      >
        <View
          style={{ ...styles.container, ...{ backgroundColor: item.color } }}
        >
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
      keyExtractor={item => item.id}
    />
  );
};

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Meals Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100
  },
  container: {
    flex: 1,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.26,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center"
  }
});
