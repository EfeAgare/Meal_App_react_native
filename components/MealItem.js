import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

const MealItem = props => (
  <View style={styles.mealScreen}>
    <TouchableOpacity onPress={props.onSelectMeal}>
      <View style={styles.mealItem}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground
            source={{ uri: props.item.imageUrl }}
            style={styles.bgImage}
          >
            <Text style={styles.title}> {props.item.title} </Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <Text>{props.item.duration}</Text>
          <Text>{props.item.complexity.toUpperCase()}</Text>
          <Text>{props.item.affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export default MealItem;

const styles = StyleSheet.create({
  mealScreen: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.26,
    elevation: 4,
    margin: 10
  },
  mealRow: {
    flexDirection: 'row',
    height: '100%',
    // padding: 10
  },
  mealItem: {
    height: 300,
    width: '100%',
    backgroundColor: '#f5f5f5'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    justifyContent: 'space-between',
    height: '15%',
    padding: 10,
    alignItems: 'center'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12
  }
});
