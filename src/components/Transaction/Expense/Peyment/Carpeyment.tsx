import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import stayle from './stayle'

const Carpeyment = ({navigation}:any) => {
  const [Carpeyment, setcarpeyment] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const Finish = () => {
if( Carpeyment === "123456"){
  navigation.navigate('Expense')
}else{
  console.log('err');
  setErrorMessage('Hesab nömrəsi tapılmadı')

}


  }

  return (
    <View style={stayle.view}>
      <TextInput
        style={stayle.input}
        onChangeText={setcarpeyment}
        value={Carpeyment}
        placeholder=" Hesab nömrəsi "
        keyboardType="numeric"
        placeholderTextColor="gray" 

      />
        {errorMessage !== '' && (
        <Text style={{color:'red'}}>{errorMessage}</Text>
      )}
      <TouchableOpacity style={stayle.button} onPress={Finish}>
        <Text style={stayle.title} >Daxil ol</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Carpeyment 
