import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class FavouritesScreen extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text> FavouritesScreen </Text>
            </View>
        )
    }
}

export default FavouritesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
    }
});
