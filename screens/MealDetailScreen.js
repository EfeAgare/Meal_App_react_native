import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class MealDetailScreen extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text> MealDetailScreen </Text>
            </View>
        )
    }
}

export default MealDetailScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
    }
});
