import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import NameForPrice from '../components/NameForPrice';
import RefreshForPrice from './RefreshForPrice';
import Food from './Food';
import {TestScheduler} from 'jest';
import {color} from 'react-native-reanimated';

const Price = ({route, navigation}) => {
  const {text, name, dataPrice} = route.params;

  var forLoopName = [];
  var showPrice = 0;

  const [price, setPrice] = useState(0);
  const data = [text, price, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const switchPrice = i => {
    if (data[i] == 0) {
      data[i] = 1;
    } else {
      data[i] = 0;
    }
    if (price == 0) {
      data[1] = showPrice;
    }
    navigation.navigate('RefreshForPrice', {
      data: data,
      poom: 1,
      dataPrice: dataPrice,
    });
  };

  const goBlack = () => {
    if (price == 0) {
      data[1] = showPrice;
    }
    navigation.navigate('Food', {data: data, poom: 1});
  };

  for (let i = 0; i < dataPrice.length; i++) {
    if (dataPrice[i][0] == data[0]) {
      showPrice = dataPrice[i][1];
      for (let j = 0; j < 9; j++) {
        data[j + 2] = dataPrice[i][j + 2];
      }
    }
  }

  for (let i = 0; i < name.length; i++) {
    var colorBg = 'white'; // *** Color ***
    var colorCur = '#DC143C'; // *** Color ***

    if (data[i + 2] == 1) {
      colorBg = '#7B68EE'; // *** Color ***
      colorCur = '#32CD32'; // *** Color ***
    }

    forLoopName.push(
      <TouchableOpacity
        style={{paddingHorizontal: 20}}
        onPress={() => switchPrice(i + 2)}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            fontSize: 15,
            fontWeight: 'bold',
            borderRadius: 15,
            borderColor: colorBg, // *** Color ***
            borderWidth: 2,
            borderStyle: 'dashed',
            color: '#90EE90', // *** Color ***
            marginBottom: 20,
          }}>
          <View style={styles.itemLeft}>
            <NameForPrice text={name[i]} />
          </View>
          <View
            style={{
              width: 12,
              height: 12,
              borderColor: colorCur, // *** Color ***
              borderWidth: 3.5,
              borderRadius: 15,
            }}></View>
        </View>
      </TouchableOpacity>,
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
        {''}    Name: <Text style={styles.textShow}>{text}</Text>
        {'\n'}    Price: <Text style={styles.textShow}>{showPrice}</Text>
      </Text>

      <Text style={styles.edit}>Edit price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        placeholderTextColor={'white'} // *** Color ***
        keyboardType="numeric"
        onChangeText={val => setPrice(val)}
      />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        {forLoopName}
      </ScrollView>

      <TouchableOpacity onPress={() => goBlack()}>
        <Text style={styles.saveButton}> Save </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 720,
    backgroundColor: 'rgb(15,35,45)', // *** Color ***
  },
  sectionTitle: {
    fontSize: 30,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: '#FF3CBE', // *** Color ***
    borderWidth: 4,
    borderStyle: 'dashed',
    color: '#FF3CBE', // *** Color ***
    width: 300,
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: '#A540FF', // *** Color ***
    elevation: 80,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 20,
  },
  textShow: {
    fontSize: 25,
    color: '#FFFFFF', // *** Color ***
  },
  edit: {
    color: '#FF2281', // *** Color ***
    fontSize: 20,
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 20,
    borderStyle: 'dashed',
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  input: {
    placeholder: '#FFFFFF', // *** Color ***
    padding: 5,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 'auto',
    width: 200,
    fontWeight: 'bold',
    borderRadius: 10,
    borderColor: '#8A2BE2', // *** Color ***
    borderWidth: 2,
    color: 'white', // *** Color ***
    textAlign: 'center',
    alignContent: 'center',
  },
  itemLeft: {
    width: 70,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 15,
  },
  saveButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 15,
    borderColor: '#FF3CBE', // *** Color ***
    borderWidth: 2,
    color: '#FF3CBE', // *** Color ***
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'Neonderthaw-Regular',
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 20,
    width: 300,
    height: 60,
    shadowColor: '#A540FF', // *** Color ***
    elevation: 22,
  },
});

export default Price;
