import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class FiltersScreen extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text> FiltersScreen </Text>
            </View>
        )
    }
}

export default FiltersScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
    }
});
