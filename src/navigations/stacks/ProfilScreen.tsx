import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileHome from '../../components/Profile/Home/ProfileHome';
import Myprofile from '../../components/Profile/Myprofile/Myprofile';
import ChangePassword from '../../components/Profile/ChangePass/ChangePassword';
import tabstayle from '../tabs/tabstayle';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import Language from '../../components/Profile/Language/Language';
import Diolog from '../../components/Profile/Elaqe/Diolog';

const Stack = createNativeStackNavigator();
const ProfilScreen = ({navigation , route}:any) => {
//   React.useLayoutEffect(() => {
//     const routeName = getFocusedRouteNameFromRoute(route);
//     if (routeName == "Myprofile" || routeName == "ChangePassword"  || routeName == "Language"){
//         navigation.setOptions({tabBarStyle: { display: 'none' }});
//     }else {
//     }
// }, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{headerShown: true, headerBackButtonMenuEnabled: false, headerTitle:'' }} >
    <Stack.Screen name="ProfileHome" component={ProfileHome}  options={{ headerStyle: { backgroundColor: '#121433' }}}/>
    <Stack.Screen name="Myprofile" component={Myprofile} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
    <Stack.Screen name="Language" component={Language} />
    <Stack.Screen name="Diolog" component={Diolog} />
   </Stack.Navigator>
  )
}

export default ProfilScreen