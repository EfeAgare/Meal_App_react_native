import React, { Component } from "react";
import { Text, View } from "react-native";

export class CategoriesScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text> CategoriesScreen </Text>
      </View>
    );
  }
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
});
