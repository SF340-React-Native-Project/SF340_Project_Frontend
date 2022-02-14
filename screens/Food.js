import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

import Foodname from '../components/Foodname';
import Price from "./Price";
import Calculated from "./Calculated";
import Game from "./Game";

const Food = ({ route, navigation }) => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const { name, dataPrice, data, poom } = route.params;

  var num = 0;
  var check = 0;

  var forLoopData = [];

  if (poom == 1) {
    for (let i = 0; i < dataPrice.length; i++) {
      if (dataPrice[i][0] != data[0]) {
        num += 1;
      } else {
        check = i;
      }
    };
    if (num == dataPrice.length) {
      dataPrice.push(data);
    } else {
      dataPrice[check] = data;
    }
    num = 0;
    check = 0;
  }

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  const [toggle, settoggle] = useState(true);

  if(dataPrice.length > 0){
    for(let i = 0; i < dataPrice.length; i++){
      const dataName = [];
      const dataShowName = [];

      for(let j = 0; j < 9; j++){
        if(dataPrice[i][j+2] == 1){
          dataName.push(name[j])
        }
      };
      for(let j = 0; j < dataName.length; j++){
        dataShowName.push(
          <Text style={{position: 'absolute', left: j * 50, paddingTop: 20}}>{'\n' + dataName[j]}</Text>
        )
      };
      forLoopData.push(
        <View style={{ paddingLeft: 20 }}>
          <View style={{ paddingTop: 15, paddingBottom: 20 }}>
            <Text>{dataPrice[i][0]} - price {dataPrice[i][1]}</Text>
            {dataShowName}
          </View>
        </View>
      )
    }
  }
  

  return (
    <View style={styles.container}>
      <ScrollView
          contentContainerStyle={{
          flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Food Items</Text>
          <View style={styles.items}>
          {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => { navigation.navigate('Price', { text: item, name: name, dataPrice: dataPrice }); }} >
                      <Foodname text={item} /> 
                  </TouchableOpacity>
              )
              })
          }
          </View>
        </View>
          
      </ScrollView>
     
      {toggle? <TouchableOpacity style={styles.toggleButton} onPress={() => settoggle(toggle ? false : true)}>
        <Text style={styles.toggleAdd}> Add Food</Text>
      </TouchableOpacity> :
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} 
          placeholder={'Enter food name'} 
          value={task}
          onChangeText={text => setTask(text)} 
          />
        <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>}

      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Text style={styles.Game}> Game </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Calculated', { name: name, dataPrice: dataPrice })}>
        <Text style={styles.Calculated}> Calculate </Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  Game:{
    width: '40%',
    fontSize: 15,
    bottom:0,
    marginLeft: 20,
    marginRight: 'auto',
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: '#CCFF33',
    borderWidth: 2,
    borderStyle: 'dashed',
    color : '#90EE90',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: "#A540FF",
    elevation: 60,  
  },
  Calculated: {
    width: '40%',
    fontSize: 15,
    bottom:45,
    marginLeft: 'auto',
    marginRight: 20,
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: '#CCFF33',
    borderWidth: 2,
    borderStyle: 'dashed',
    color : '#90EE90',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: "#A540FF",
    elevation: 60,  
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,35,45)',
  },
  tasksWrapper: {
    paddingTop: 15,
    paddingHorizontal: 20,
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
  items: {
    color:'black',
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 160,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    color: '#0CF4FF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#A540FF',
    borderWidth: 5,
  },
  toggleAdd:{
    bottom: 75,
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
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 5,
            shadowRadius: 16.00,
            elevation: 50,  
  },
  toggleButton:{
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  addText: {
    fontSize: 35,
    color: '#10FF92',
  },
});

export default Food;