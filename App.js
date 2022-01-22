import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home'
import Food from './screens/Food';
import Price from './screens/Price';
import Game from './screens/Game';
import Calculated from "./screens/Calculated";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Food" component={Food}/>
        <Stack.Screen name="Price" component={Price}/>
        <Stack.Screen name="Calculated" component={Calculated}/>
        <Stack.Screen name="Game" component={Game}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;