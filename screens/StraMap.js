import React, {Component} from 'react';
import {Text, View, StyleSheet} from "react-native";

export default class DailyPicScreen extends Component {
    render() {
        return(
            <View style={styles.screen}>
                <Text> StraMap Screen</Text>
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