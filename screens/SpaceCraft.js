import React, {Component} from 'react';
import {Text, View, StyleSheet} from "react-native";

export default class SpaceCraftScreen extends Component {
    render() {
        return(
            <View style={styles.screen}>
                <Text>Space Craft Screen</Text>
            </View>
        )
    }
}

const style= StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})