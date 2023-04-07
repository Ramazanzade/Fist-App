import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import stayle from './stayle'

const Govmentpeyment = ({route,navigation}:any) => {
  const [Govmentpeyment, setGovmentpeyment] = useState('')
  const Finish = () => {
    if( Govmentpeyment === "add"){
      navigation.navigate('Expense')
    }else{
      console.log('err');
    }
  }

  return (
    <View style={stayle.view}>
      <TextInput
        style={stayle.input}
        onChangeText={setGovmentpeyment}
        value={Govmentpeyment}
        placeholder=" Email ünvanınızı daxil edin "
        keyboardType="numeric"
        placeholderTextColor="gray" // set the placeholder color to gray

      />
      <TouchableOpacity style={stayle.button} onPress={Finish}>
        <Text style={stayle.title} >Finish</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Govmentpeyment 
