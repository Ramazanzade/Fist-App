import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../../components/Registerr/Singup/Singup';
import OthersBank from '../../components/Ohters/OthersBank';
import Component from '../../components/Ohters/OthersBank/Component';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import OthersNew from '../../components/Ohters/OthersNew/OthersNew';
import OthersNew1 from '../../components/Ohters/OthersNew/OthersNew1';
const Stack = createNativeStackNavigator();

const OthersScreen = ({navigation, route }:any) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName == "Component" || routeName == "OthersNew"){
        navigation.setOptions({tabBarStyle: { display: 'none' }});
    }else {
    }
}, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="OthersBank" component={OthersBank} />
        <Stack.Screen name="Component" component={Component}/>
        <Stack.Screen name="OthersNew" component={OthersNew}/>
        <Stack.Screen name="OthersNew1" component={OthersNew1}/>
    </Stack.Navigator>
  )
}

export default OthersScreen