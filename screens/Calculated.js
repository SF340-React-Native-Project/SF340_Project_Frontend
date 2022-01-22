import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Home from "./Home";

const Calculated = ({navigation}) => {
    return(
        <ScrollView>
            <View>
                <Text>CalculatedScreen</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text> Exit </Text>
                </TouchableOpacity>
            </View>
        </ScrollView> 
    )
}

export default Calculated;