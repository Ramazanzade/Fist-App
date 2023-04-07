import { View, Text, TouchableOpacity, FlatList, Image  } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import stayle from './stayle'
import { UserContext } from '../../../Context/UserContext'
import moment from 'moment'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Expense = ({ navigation }: any) => {
  const { userData, setUserData } = useContext<any>(UserContext);
  const [current1, setCurrent1] = useState('');
  const [error, setError] = useState(false);
  const [debt, setDebt] = useState<any>(1000);
  const [newAmount, setNewAmount] = useState(userData.amount);

  const Finish = async () => {
    if (!current1) {
      setError(true);
    }
      const amountToSubtract = parseInt(current1,10);
      const updatedAmount = userData.amount - amountToSubtract;
      const updatedAmount1 = debt - amountToSubtract;
      console.log('Updated amount:', updatedAmount);
  
      try {
        const response = await axios.put(`http://bankapi-2puz.onrender.com/api/user/users/642d3864656f06e978043f43`, {
          ...userData,
          amount: updatedAmount,
        });
        console.log('API response:', response.data);
        setCurrent1('');
        setNewAmount(updatedAmount);
        userData.amount = updatedAmount;
        setUserData(userData)
        setDebt(updatedAmount1);
        await AsyncStorage.setItem('debt', JSON.stringify(updatedAmount1));
        navigation.navigate("Fhinis", { current1: current1 , updatedAmount1: updatedAmount1})
      } catch (error) {
        console.log('API error:', error);
      }
    

   
  }
  useEffect(() => {
    const loadDebt = async () => {
      const storedDebt = await AsyncStorage.getItem('debt');
      if (storedDebt) {
        setDebt(JSON.parse(storedDebt));
      }
    };
    loadDebt();
  }, []);

  const currentDate = moment();
  return (
    <View style={stayle.view}>
      <View style={stayle.textview}>
        <Text style={stayle.text}>Müştəri :   {userData.name} {userData.surname}</Text>
        <Text style={stayle.text}>Tarix : {currentDate.format('DD/MM/YYYY')}</Text>
        <Text style={stayle.text}>Borcu :     {debt} manat</Text>
        <Text style={stayle.text}>Ödənilmeli mebleğ :  200 manat{userData.id}</Text>
      </View>
      <TextInput
        style={stayle.input}
        onChangeText={setCurrent1}
        value={current1}
        placeholder=" Məbləği daxil edin "
        keyboardType="numeric"
        placeholderTextColor="gray"
      />
     {error && <Text style={{ color: 'red', marginBottom: 10 }}>Please enter a value in the input field.</Text>}
<TouchableOpacity style={stayle.button} onPress={async() => {
  await Finish();
  navigation.navigate('Fhinis', {
    current1: current1,
    currentDate: currentDate.format('DD/MM/YYYY')
  })
}}>
  <Text style={stayle.title}>Ödə</Text>
</TouchableOpacity>
    </View>
  )
}

export default Expense;
