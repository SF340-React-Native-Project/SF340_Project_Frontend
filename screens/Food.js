import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';

import Foodname from '../components/Foodname';
import Price from './Price';
import Calculated from './Calculated';
import Game from './Game';

const Food = ({route, navigation}) => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const {name, dataPrice, data, poom} = route.params;

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
    }
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
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const [toggle, settoggle] = useState(true);

  if (dataPrice.length > 0) {
    for (let i = 0; i < dataPrice.length; i++) {
      const dataName = [];
      const dataShowName = [];

      for (let j = 0; j < 9; j++) {
        if (dataPrice[i][j + 2] == 1) {
          dataName.push(name[j]);
        }
      }
      for (let j = 0; j < dataName.length; j++) {
        dataShowName.push(
          <Text style={{position: 'absolute', left: j * 50, paddingTop: 20}}>
            {'\n' + dataName[j]}
          </Text>,
        );
      }
      forLoopData.push(
        <View style={{paddingLeft: 20}}>
          <View style={{paddingTop: 15, paddingBottom: 20}}>
            <Text>
              {dataPrice[i][0]} - price {dataPrice[i][1]}
            </Text>
            {dataShowName}
          </View>
        </View>,
      );
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Food Items</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate('Price', {
                      text: item,
                      name: name,
                      dataPrice: dataPrice,
                    });
                  }}>
                  <Foodname text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {toggle ? (
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => settoggle(toggle ? false : true)}>
          <Text style={styles.toggleAdd}> Add Food</Text>
        </TouchableOpacity>
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder={'Enter food name'}
            placeholderTextColor={'#90EE90'} // *** Color ***
            value={task}
            onChangeText={text => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}

      <View style={styles.bottombar}>
        <TouchableOpacity onPress={() => navigation.navigate('Game')}>
          <Text style={styles.Game}> Game </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Calculated', {
              name: name,
              dataPrice: dataPrice,
            })
          }>
          <Text style={styles.Calculated}> Calculate </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Game: {
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: '#CCFF33', // *** Color ***
    borderWidth: 2,
    borderStyle: 'dashed',
    color: '#90EE90', // *** Color ***
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: '#A540FF', // *** Color ***
    elevation: 18,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  Calculated: {
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: '#CCFF33', // *** Color ***
    borderWidth: 2,
    borderStyle: 'dashed',
    color: '#90EE90', // *** Color ***
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: '#A540FF', // *** Color ***
    elevation: 18,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,35,45)', // *** Color ***
  },
  tasksWrapper: {
    paddingTop: 15,
    paddingHorizontal: 20,
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
    textAlign: 'center',
    width: 300,
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: '#A540FF', // *** Color ***
    elevation: 67,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 20,
  },
  items: {
    color: 'black', // *** Color ***
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 20,
    borderRadius: 60,
    borderColor: 'white', // *** Color ***
    borderWidth: 3,
    width: 250,
    color: '#90EE90', // *** Color ***
  },
  addWrapper: {
    width: 60,
    height: 60,
    color: '#0CF4FF', // *** Color ***
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#A540FF', // *** Color ***
    borderWidth: 5,
  },
  toggleAdd: {
    bottom: 15,
    borderRadius: 15,
    borderColor: '#FF3CBE', // *** Color ***
    borderWidth: 2,
    color: '#FF3CBE', // *** Color ***
    textAlign: 'center',
    width: 300,
    height: 60,
    fontSize: 40,
    fontFamily: 'Neonderthaw-Regular',
    shadowColor: '#A540FF', // *** Color ***
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 5,
    shadowRadius: 16.0,
    elevation: 55,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 15,
  },
  toggleButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  addText: {
    fontSize: 35,
    color: '#10FF92', // *** Color ***
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  bottombar: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Food;
