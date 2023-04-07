import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React , {useLayoutEffect,useContext} from 'react'
import stayleP from './stayleP'
import style from '../../Registerr/Singup/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import  {UserContext}  from '../../Context/UserContext';
const Myprofile = ({navigation, route}:any) => {
    const { userData } = useContext<any>(UserContext);
    return (
        <View style={{backgroundColor:'#121433',flex:1}}>
            
            <View style={{marginTop:30}}>
                <View style={stayleP.imgview}>
                    <Text style={stayleP.text}> Name :     {userData.name}</Text>
                </View>
                <View style={stayleP.imgview}>
                    <Text style={stayleP.text}> Surname:   {userData.surname}</Text>
                </View>
                <View style={stayleP.imgview}>
                    <Text style={stayleP.text}>  Email:      {userData.email}</Text>
                </View> 
                <View style={stayleP.imgview}>
                    <Text style={stayleP.text}>  Live:     {userData.live}</Text>
                </View> 
                <View style={stayleP.imgview}>
                    <Text style={stayleP.text}>   Work:    {userData.work}</Text>
                </View>
                <View style={stayleP.imgview}>
                    <Text style={stayleP.text}>   Age:    {userData.age}</Text>
                </View>
              </View>
        </View>
    )
}

export default Myprofile