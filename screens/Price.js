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
    // var colorBg = '#EE82EE';
    var colorBg = 'white';
    var colorCur = '#DC143C';

    if(data[i+2] == 1){
      colorBg = '#7B68EE';
      colorCur = '#32CD32';
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
            <NameForPrice text={name[i]} />
          </View>
          <View style={{width: 12,
            height: 12,
            borderColor: colorCur,
            borderWidth: 3.5,
            borderRadius: 15,}}>
          </View>
      
        </View>
      </TouchableOpacity>
    )
  }

  return(
    <ScrollView>
      <View style={styles.container} >
        <Text style={styles.sectionTitle} > Name: <Text style={styles.textShow}>{text}</Text>
        {"\n"}Price: <Text style={styles.textShow}>{showPrice}</Text></Text>
        {/* <Text style={styles.sectionTitle1} > Price: {showPrice}</Text> */}
        
        <Text style={styles.edit}>Edit price</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Enter amount'
          placeholderTextColor={'white'}
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
    borderRadius: 15,
    // borderColor: 'black'
  },
  saveButton:{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:40,
    borderRadius: 15,
    borderColor: '#FF3CBE',
    borderWidth: 2,
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
    fontSize:25,
    color:"#FFFFFF",
  },
  edit: {
    color: '#FF2281',
    fontSize:20,
    marginTop:40,
    marginBottom:5,
    marginLeft:20,
    borderStyle: 'dashed',
  },
  itemLeft: {
    width:70,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 15,
  },
  square: {
    // color: "#FFFFFF",
    width: 24,
    height: 24,
    backgroundColor: '#FFFFFF',
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
    fontSize: 30,
    marginTop:30,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: '#FF3CBE',
    borderWidth: 4,
    borderStyle: 'dashed',
    color : '#FF3CBE',
    textAlign: 'center',
    width: 300,
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: "#A540FF",
    elevation: 60,  
  },
  input: {
    placeholder: "#FFFFFF",
    padding: 5,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 'auto',
    width: 200,
    fontWeight: 'bold',
    borderRadius: 10,
    borderColor: '#8A2BE2',
    borderWidth: 2,
    color : 'white',
    textAlign: 'center',
    alignContent: 'center',
  },
});

export default Price;