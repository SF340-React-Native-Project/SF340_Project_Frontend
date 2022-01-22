import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const foodname = "beer"

const Price = ({navigation}) => {
    return(
        <ScrollView>
            <View style={styles.container} >
                <Text style={styles.sectionTitle} >Food name: {foodname}</Text>
                


            </View>
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
});

export default Price;