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

import Name from '../components/Name';
import Food from './Food';

const Home = ({navigation}) => {
  const [name, setName] = useState();
  const [nameItems, setNameItems] = useState([]);

  const dataPrice = [];

  const handleAddTask = () => {
    Keyboard.dismiss();
    setNameItems([...nameItems, name]);
    setName(null);
  };

  const completeTask = index => {
    let itemsCopy = [...nameItems];
    itemsCopy.splice(index, 1);
    setNameItems(itemsCopy);
  };

  const [toggle, settoggle] = useState(true);

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Member</Text>
          <Text style={styles.nameText}>Name</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {nameItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                  <Name text={item} />
                </TouchableOpacity>
              );
            })}
            
            {toggle? <TouchableOpacity style={styles.toggleButton} onPress={() => settoggle(toggle ? false : true)}>
              <Text style={styles.toggleAdd}> Add Member</Text>
            </TouchableOpacity> :
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.writeTaskWrapper}>
              <TextInput
                style={styles.input}
                placeholder={' Enter name'}
                value={name}
                onChangeText={text => setName(text)}
              />
              <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                  <Text style={styles.addText}>+</Text>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>}
            
            

            
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Food', {name: nameItems, dataPrice: dataPrice});
        }}>
        <Text style={{paddingLeft: 250 , fontSize:30}}> Next </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: 'bold',
    color : 'rgb(214,28,255)',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
  addText: {
    fontSize: 35,
    color: '#10FF92',
  },
  toggleAdd:{
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText:{
    color : '#F7FA13',
    fontSize:20,
  }
});

export default Home;
