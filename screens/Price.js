import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Price = ({ route, navigation }) => {
    const { text, name } = route.params;

    return(
        <ScrollView>
            <View style={styles.container} >
                <Text style={styles.sectionTitle} >Food name: {text}</Text>

                <Text>{name[0]}</Text>
                <Text>{name[1]}</Text>
                <Text>{name[2]}</Text>

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