import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StatusHome from '../../components/Status/StatusHome';
import Onboarding from '../../components/onboarding/Onboarding';
import Middlewear from '../../components/Registerr/EntryPage/Middlewear';
import Singin from '../../components/Registerr/Singin/Singin';
import Signup from '../../components/Registerr/Singup/Singup';
import Confirm from '../../components/Registerr/Confrim/Confrim';
const Stack = createNativeStackNavigator();
const StartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Group>
    <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false }} />
            <Stack.Screen name="Middlewear" component={Middlewear} />
            <Stack.Screen name="Singin" component={Singin} />  
            <Stack.Screen name="Singup" component={Signup} /> 
            <Stack.Screen name="Confrim" component={Confirm}   options={{ headerShown: false }} />
    </Stack.Group>
   </Stack.Navigator>
  )
}

export default StartStack