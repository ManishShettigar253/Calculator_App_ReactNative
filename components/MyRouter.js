import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import CalculatorScreen from './Screens/CalculatorScreen';

const Stack = createStackNavigator();

const MyRouter=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Calculator" component={ CalculatorScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyRouter;