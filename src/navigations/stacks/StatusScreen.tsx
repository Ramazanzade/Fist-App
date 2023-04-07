import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StatusHome from '../../components/Status/StatusHome';
const Stack = createNativeStackNavigator();
const StatusScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Group>
    <Stack.Screen name="StatusHome" component={StatusHome}/>

    </Stack.Group>
   </Stack.Navigator>
  )
}

export default StatusScreen