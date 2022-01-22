import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Home from "./Home";

const Welcome = ({navigation}) => {
    return(
        <ScrollView>
            <View>
                <Text>WelcomeScreen</Text>

                {/* Code */}
                
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text> Go to Home </Text>
                </TouchableOpacity>
            </View>
        </ScrollView> 
    )
}

export default Welcome;