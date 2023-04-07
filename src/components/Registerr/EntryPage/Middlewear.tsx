import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React ,{useState} from 'react'
import stayle from './stayle'

export default function Middlewear({navigation}:any) {
  const [isLoading, setIsLoading] = useState(false);
const customer=()=>{
    setIsLoading(true);
  setTimeout(() => {
   setIsLoading(false);
 }, 3000);
 navigation.navigate('Singin')
} 
const Guest =()=>{
  navigation.navigate('Singup')
  setIsLoading(true);
  setTimeout(() => {
   setIsLoading(false);
 }, 3000);
}



  return (
    <View style={stayle.midelverbuton}>
      <View>
      <Text style={stayle.title2}>Bankımıza xoş gəlmisiz</Text>
      <Text style={stayle.title3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel nostrum molestias doloribus nesciunt ipsa. Animi officia sapiente unde cumque.</Text>
      </View>
      <View style={stayle.toucbutton}>
      <TouchableOpacity style={stayle.button} disabled={isLoading} onPress={customer}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) :(<Text style={stayle.title}>Bank müştərisi</Text>)}
      </TouchableOpacity>
      <TouchableOpacity onPress={Guest} disabled={isLoading}  style={[stayle.button, {        backgroundColor: '#23265A'}]}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) :( <Text style={[stayle.title]}>Qonaq</Text>)}
      </TouchableOpacity>
      </View>
    </View>
  )
}