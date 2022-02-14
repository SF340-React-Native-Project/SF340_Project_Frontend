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
        <ScrollView>
            <View style={styles.container} >
                <Text style={styles.sectionTitle} > Calculated </Text>
                <View style={{ paddingTop: 20 }}></View>
                <View>
                    {forLoopName}
                </View>
                  <Text style={styles.toggleExit} onPress={() => goBlack()}> Exit </Text>
            </View>
        </ScrollView> 
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,35,45)',
    flexDirection: "column",
    width: 400,
    height: 720,
  },

  sectionTitle: {
    marginTop:30,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    borderRadius: 5,
    borderColor: '#FF3CBE',
    borderWidth: 1,
    color :'rgb(242,197,4)',
    textAlign: 'center',
    width: 300,
    height: 70,
    fontSize : 45,
    fontFamily: 'Neonderthaw-Regular',
    shadowColor: "#A540FF",
    elevation: 50,  
  },
  toggleExit:{
    position: "absolute",
    borderRadius: 5,
    borderColor: '#FF0000',
    borderWidth: 1,
    color : '#FF0000',
    textAlign: "right",
    fontSize : 30,
    width : 65,
    marginLeft: 320,
    marginTop: 650,
    shadowColor: "#D2691E",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 5,
            shadowRadius: 16.00,
            elevation: 50,
  },
});
export default Calculated;