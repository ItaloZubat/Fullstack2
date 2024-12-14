// navigation/StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const StackNavigator = ({ products, setProducts }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home">
        {props => <HomeScreen {...props} products={products} setProducts={setProducts} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;