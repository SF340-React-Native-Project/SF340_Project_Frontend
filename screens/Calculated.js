import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import NameForCalculated from '../components/NameForCalculated';
import Welcome from "./Welcome";

const Calculated = ({ route, navigation }) => {
    const { name, dataPrice } = route.params;

    var forLoopName = [];

    var num = 0;
    var share = 0;
    const sum = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for(let i = 0; i < dataPrice.length; i++){
      for(let j = 0; j < 9; j++){
        if(dataPrice[i][j+2] == 1){
          num += 1;
        };
      };
      share = dataPrice[i][1] / num;
      for(let j = 0; j < 9; j++){
        if(dataPrice[i][j+2] == 1){
          sum[j] += share;
        };
      };
      num = 0;
    }

    for(let i = 0; i < name.length; i++){
        forLoopName.push(
        <TouchableOpacity style={{ paddingHorizontal: 20 }}>
            <NameForCalculated text={name[i]} price={sum[i]}/> 
        </TouchableOpacity>
        )
    }

    const goBlack = () => {
      navigation.navigate('Welcome');
    }

    return(
        <ScrollView>
            <View style={styles.container} >
                <Text style={styles.sectionTitle} > Calculated </Text>
                <View style={{ paddingTop: 20 }}></View>
                <View>
                    {forLoopName}
                </View>
                <TouchableOpacity onPress={() => goBlack()}>
                    <Text> Exit </Text>
                </TouchableOpacity>
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
  sectionTitle1: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    width: 200,
  },
});

export default Calculated;