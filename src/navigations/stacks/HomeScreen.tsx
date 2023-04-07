import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../components/Home/Home';
const Stack = createNativeStackNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
   <Stack.Group>
   <Stack.Screen name="Home" component={Home} />
   </Stack.Group>
  </Stack.Navigator>
  )
}

export default HomeScreen