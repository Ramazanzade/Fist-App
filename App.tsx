import { StatusBar, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabbar from './src/navigations/tabs/Tabbar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserContext } from './src/components/Context/UserContext';
import './src/components/language/Dcslocal'
import 'intl';
import 'intl-pluralrules';
import { Provider } from 'react-redux';
import store from './src/store/store';
import StartStack from './src/navigations/stacks/StartStack';
import { UserProvidercurrnrtProvider } from './src/components/Context/usecontextcurrent';
import { UsercurrentProvider } from './src/components/Context/usecontextcurrent1';
import {LogBox} from "react-native"

LogBox.ignoreAllLogs();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <UsercurrentProvider>
    <UserProvidercurrnrtProvider>
    <UserContext.Provider value={{ userData, setUserData }}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="StartStack" component={StartStack} options={{ headerShown: false }} />
            <Stack.Screen name="Tabbar" component={Tabbar} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </UserContext.Provider>
    </UserProvidercurrnrtProvider>
    </UsercurrentProvider>

  )
}

export default App