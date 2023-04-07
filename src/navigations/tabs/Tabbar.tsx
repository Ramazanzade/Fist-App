import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faChartArea, faPlus, faWallet, faUser , faChartBar } from '@fortawesome/free-solid-svg-icons';
import tabstayle from './tabstayle';
import HomeScreen from '../stacks/HomeScreen';
import StatusScreen from '../stacks/StatusScreen';
import TransactionScreen from '../stacks/TransactionScreen';
import BudgetScreen from '../stacks/OthersScreen';
import ProfilScreen from '../stacks/ProfilScreen';
import Myprofile from '../../components/Profile/Myprofile/Myprofile';
import ProfileHome from '../../components/Profile/Home/ProfileHome';
import OthersScreen from '../stacks/OthersScreen';

const Tab = createBottomTabNavigator();



const Tabbar = ({ route }: any) => {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#121433',
        height: 60,
        shadowColor: '#121433',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        borderColor: '#121433',
        borderWidth:2,
        
      },
      tabBarInactiveBackgroundColor: '#121433', 
            tabBarActiveTintColor: "#121433",

    }}
  > 
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => <FontAwesomeIcon icon={faHome} style={tabstayle.tabIcon} size={25} />,
          tabBarShowLabel: false,
        }}
        name="HomeScreen" component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => <FontAwesomeIcon icon={faChartArea} style={tabstayle.tabIcon} size={25} />,
          tabBarShowLabel: false,
        }}
        name="StatusScreen" component={StatusScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => <FontAwesomeIcon icon={faPlus} style={tabstayle.middleIcon} size={15} />,
          tabBarShowLabel: false,
        }}
        name="TransactionScreen" component={TransactionScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => <FontAwesomeIcon icon={faChartBar} style={tabstayle.tabIcon} size={25} />,
          tabBarShowLabel: false,
        }}
        name="OthersScreen" component={OthersScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => <FontAwesomeIcon icon={faUser} style={tabstayle.tabIcon} size={25} />,
          tabBarShowLabel: false,
        }}
        name="ProfilScreen" component={ProfilScreen}
      />
    </Tab.Navigator>
  )
}

export default Tabbar;
