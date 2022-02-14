import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

import NameForCalculated from '../components/NameForCalculated';
import Welcome from "./Welcome";
import { block } from "react-native-reanimated";

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
    <View style={styles.container}>
      <Text style={styles.sectionTitle} > Calculated </Text>
      <View style={{ paddingTop: 20 }}></View>
      <ScrollView>
        {forLoopName}
      </ScrollView> 
      <Text style={styles.toggleExit} onPress={() => goBlack()}> Exit </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,35,45)', // *** Color ***
    flexDirection: "column",
    width: 400,
    height: 720,
  },
  sectionTitle: {
    marginTop:30,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: '#FF3CBE', // *** Color ***
    borderWidth: 3,
    color :'rgb(242,197,4)', // *** Color ***
    textAlign: 'center',
    width: 300,
    height: 70,
    fontSize : 45,
    fontFamily: 'Neonderthaw-Regular',
    shadowColor: "#A540FF", // *** Color ***
    elevation: 50,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 25,
  },
  toggleExit:{
    borderRadius: 8,
    borderColor: '#FF0000', // *** Color ***
    borderWidth: 2,
    color : '#FF0000', // *** Color ***
    textAlign: "center",
    fontSize : 30,
    width : 80,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: "#D2691E", // *** Color ***
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 5,
    shadowRadius: 16.00,
    elevation: 16,
    textShadowColor: '#D2691E', // *** Color ***
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 15,
  },
});
export default Calculated;