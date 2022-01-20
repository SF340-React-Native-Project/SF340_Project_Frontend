import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Home from "./Home";
import Detail from "./Detail";

const Game = ({navigation}) => {
    return(
        <ScrollView>
            <View>
                <Text>GameScreen</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>Click me to home </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <Text>Click me to detail </Text>
                </TouchableOpacity>
            </View>
        </ScrollView> 
    )
}

export default Game;