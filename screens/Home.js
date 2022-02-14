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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Member</Text>
          <Text style={styles.nameText}>Name</Text>
          <View style={styles.items}>
            {nameItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                  <Name text={item} />
                </TouchableOpacity>
              );
            })}

            {toggle ? (
              <TouchableOpacity
                style={styles.toggleButton}
                onPress={() => settoggle(toggle ? false : true)}>
                <Text style={styles.toggleAdd}> Add Member</Text>
              </TouchableOpacity>
            ) : (
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeTaskWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder={' Enter name'}
                  placeholderTextColor={'#90EE90'} // *** Color ***
                  value={name}
                  onChangeText={text => setName(text)}
                />
                <TouchableOpacity onPress={() => handleAddTask()}>
                  <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                  </View>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            )}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Food', {name: nameItems, dataPrice: dataPrice});
        }}>
        <Text style={styles.toggleNext}> Next </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: 'bold',
    color: 'rgb(214,28,255)', // *** Color ***
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 20,
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
  addText: {
    fontSize: 35,
    color: '#10FF92', // *** Color ***
  },
  toggleAdd: {
    borderRadius: 15,
    borderColor: '#FF3CBE', // *** Color ***
    borderWidth: 2,
    color: '#FF3CBE', // *** Color ***
    textAlign: 'center',
    width: 300,
    height: 70,
    fontSize: 45,
    fontFamily: 'Neonderthaw-Regular',
    shadowColor: '#A540FF', // *** Color ***
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 5,
    shadowRadius: 16.0,
    elevation: 50,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 20,
  },
  toggleButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    color: '#F7FA13', // *** Color ***
    fontSize: 20,
    textShadowColor: '#F7FA13', // *** Color ***
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  toggleNext: {
    borderRadius: 10,
    borderColor: '#F7FA13', // *** Color ***
    borderWidth: 2,
    color: 'rgb(214,28,255)', // *** Color ***
    textAlign: 'center',
    fontSize: 30,
    width: 80,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: 'rgb(214,28,255)', // *** Color ***
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 5,
    shadowRadius: 16.0,
    elevation: 16,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 15,
  },
});

export default Home;
