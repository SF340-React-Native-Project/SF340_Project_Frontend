import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import NameForPrice from '../components/NameForPrice';
import RefreshForPrice from './RefreshForPrice';
import Food from "./Food";
import { TestScheduler } from "jest";
import { color } from "react-native-reanimated";

const Price = ({ route, navigation }) => {
  const { text, name, dataPrice } = route.params;

  var forLoopName = [];

  // Test Poom 500 Ing 500 A 40 B 540 C 40

  var showPrice = 0;

  const [price, setPrice] = useState(0);

  const data = [text, price, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const switchPrice = (i) => {
    if (data[i] == 0) {
      data[i] = 1;
    } else {
      data[i] = 0;
    };
    if (price == 0) {
      data[1] = showPrice;
    };
    navigation.navigate('RefreshForPrice', { data: data, poom: 1, dataPrice: dataPrice });
  }

  const goBlack = () => {
    if (price == 0) {
      data[1] = showPrice;
    };
    navigation.navigate('Food', { data: data, poom: 1 })
  }

  for (let i = 0; i < dataPrice.length; i++) {
    if (dataPrice[i][0] == data[0]) {
      showPrice = dataPrice[i][1];
      for (let j = 0; j < 9; j++) {
        data[j+2] = dataPrice[i][j+2];
      };
    }
  };

  // /Test

  for(let i = 0; i < name.length; i++){
    var num = i+2;

    var colorBg = 'rgba(52, 52, 52, 0.2)';

    if(data[i+2] == 1){
      colorBg = 'green';
    };

    forLoopName.push(
      <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => switchPrice(i+2)}>
        <View  style={{
          backgroundColor: colorBg,
          padding: 15,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <NameForPrice text={name[i]} />
          </View>
          <View style={styles.circular}></View>
        </View>
      </TouchableOpacity>
    )
  }

  return(
    <ScrollView>
      <View style={styles.container} >
        <Text style={styles.sectionTitle} > Food name: <Text style={styles.textShow}>{text}</Text>
        {"\n"}Price: <Text style={styles.textShow}>{showPrice}</Text></Text>
        {/* <Text style={styles.sectionTitle1} > Price: {showPrice}</Text> */}
        
        <Text style={styles.edit}>Edit price</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Enter amount'
          keyboardType='numeric'
          onChangeText={(val) => setPrice(val)} />


        <View style={styles.name}>
          {forLoopName}
        </View>
        <TouchableOpacity onPress={() => goBlack()}>
          <Text style={styles.saveButton}> Save </Text>
        </TouchableOpacity>
      </View>
    </ScrollView> 
  )
}

const styles = StyleSheet.create({
  name:{
    color:'#FF3CBE',
    // width:250,
  },
  saveButton:{
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    borderColor: '#FF3CBE',
    borderWidth: 1,
    color : '#FF3CBE',
    textAlign: 'center',
    width: 300,
    height: 70,
    fontSize : 45,
    fontFamily: 'Neonderthaw-Regular',
    shadowColor: "#A540FF",
    elevation: 50,  
  },
  textShow: {
    color:"#FFFFFF",
  },
  edit: {
    color: '#FF2281',
    fontSize:20,
    marginTop:40,
    marginLeft:20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  container: {
    height:1000,
    backgroundColor: 'rgb(15,35,45)',
  },
  sectionTitle: {
    fontSize: 24,
    marginTop:30,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    borderRadius: 5,
    borderColor: '#FF3CBE',
    borderWidth: 1,
    color : '#FF3CBE',
    textAlign: 'center',
    width: 300,
    shadowColor: "#A540FF",
    elevation: 60,  
  },
  // sectionTitle1: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   paddingTop: 5,
  //   paddingLeft: 2,
  // },
  input: {
    placeholder: "#FFFFFF",
    padding: 5,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 'auto',
    width: 200,
    fontWeight: 'bold',
    borderRadius: 5,
    borderColor: '#8A2BE2',
    borderWidth: 1,
    color : '435',
    textAlign: 'center',
    alignContent: 'center',
  },
});

export default Price;