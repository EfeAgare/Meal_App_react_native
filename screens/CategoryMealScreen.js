import React, { Component } from 'react'
import { StyleSheet,Text, View } from 'react-native'

export class CategoryMealScreen extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text> CategoryMealScreen </Text>
            </View>
        )
    }
}

export default CategoryMealScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
    }
});
