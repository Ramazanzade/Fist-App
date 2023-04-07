import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Incomecategory from '../../components/Transaction/Expense/Middlewear/Incomecategory';
import Transfer from '../../components/Transaction/Expense/Middlewear/Transfer';
import Comunal from '../../components/Transaction/Expense/Middlewear/Comunal';
import Credit from '../../components/Transaction/Expense/Middlewear/Credit';
import Car from '../../components/Transaction/Expense/Middlewear/Car';
import Cerme from '../../components/Transaction/Expense/Middlewear/Cerme';
import Education from '../../components/Transaction/Expense/Middlewear/Education';
import Food from '../../components/Transaction/Expense/Middlewear/Food';
import Full from '../../components/Transaction/Expense/Middlewear/Full';
import Govment from '../../components/Transaction/Expense/Middlewear/Govment';
import Heath from '../../components/Transaction/Expense/Middlewear/Heath';
import Iane from '../../components/Transaction/Expense/Middlewear/Iane';
import Wifi from '../../components/Transaction/Expense/Middlewear/Wifi'
import Kocurma from '../../components/Transaction/Expense/Middlewear/Kocurma';
import Phone from '../../components/Transaction/Expense/Middlewear/Phone';
import Taxi from '../../components/Transaction/Expense/Middlewear/Taxi';
import Travel from '../../components/Transaction/Expense/Middlewear/Travel';
import Carpeyment from '../../components/Transaction/Expense/Peyment/Carpeyment';
import Gamepeyment from '../../components/Transaction/Expense/Peyment/Govmentpeyment';
import Expense from '../../components/Transaction/Expense/Peyment/Expense';
import Finish from '../../components/Transaction/Expense/Peyment/Fhinis';
import Govmentpeyment from '../../components/Transaction/Expense/Peyment/Govmentpeyment';
import StatusHome from '../../components/Status/StatusHome';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

const Stack = createNativeStackNavigator();
const TransactionScreen = ({navigation, route}:any) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName == "Incomecategory") {
      navigation.setOptions({tabBarVisible: true});
    } else {
      navigation.setOptions({tabBarVisible: false});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{headerShown: true, headerBackButtonMenuEnabled: false, headerTitle:'' }}>
      <Stack.Screen name="Incomecategory" component={Incomecategory}/>
     <Stack.Screen name="Education" component={Education}/>
      <Stack.Screen name="Transfer" component={Transfer}/>
      <Stack.Screen name="Comunal" component={Comunal}/>
      <Stack.Screen name="Credit" component={Credit}/>
      <Stack.Screen name="Car" component={Car}/>
      <Stack.Screen name="Cerme" component={Cerme}/>
      <Stack.Screen name="Food" component={Food}/>
      <Stack.Screen name="Full" component={Full}/>
      <Stack.Screen name="Govment" component={Govment}/>
      <Stack.Screen name="Heath" component={Heath}/>
      <Stack.Screen name="Iane" component={Iane}/>
      <Stack.Screen name="Wifi" component={Wifi}/>
      <Stack.Screen name="Kocurma" component={Kocurma}/>
      <Stack.Screen name="Phone" component={Phone}/>
      <Stack.Screen name="Taxi" component={Taxi}/>
      <Stack.Screen name="Travel" component={Travel}/>
      <Stack.Screen name="Carpeyment" component={Carpeyment}/>
      <Stack.Screen name="Govmentpeyment" component={Govmentpeyment}/>
      <Stack.Screen name="Expense" component={Expense} />
      <Stack.Screen name="Fhinis" component={Finish} options={{title: 'Fhinis'}}/>

    </Stack.Navigator>
  )
}

export default TransactionScreen