import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './screens/Welcome'
import Home from './screens/Home'
import Food from './screens/Food';
import Price from './screens/Price';
import Game from './screens/Game';
import Calculated from "./screens/Calculated";
import RefreshForPrice from "./screens/RefreshForPrice";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ header: () => null }}/>
        <Stack.Screen name="Home" component={Home} options={{ header: () => null }}/>
        <Stack.Screen name="Food" component={Food} options={{ header: () => null }}/>
        <Stack.Screen name="RefreshForPrice" component={RefreshForPrice} options={{ header: () => null }}/>
        <Stack.Screen name="Price" component={Price} options={{ header: () => null }}/>
        <Stack.Screen name="Game" component={Game}/>
        <Stack.Screen name="Calculated" component={Calculated} options={{ header: () => null }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;