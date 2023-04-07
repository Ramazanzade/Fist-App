import React, { useState,useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faEnvelope, faIdCard, faL } from '@fortawesome/free-solid-svg-icons';
import style from '../Singup/style';
import Client from '../../../network/Client';
import axios from 'axios';
import  {UserContext}  from '../../Context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Singin = ({navigation}:any) => {
  const [name, setName] = useState<any>('');
  const [fin, setFin] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [age, setage] = useState<any>('');
  const [live, setlive] = useState<any>('');
  const [work, setwork] = useState<any>('');
  const [digital, setdigital] = useState<any>('');
  const [digital1, setdigital1] = useState<any>('');
  const [avatar, setavatar] = useState<any>('');
  const [amount, setamount] = useState<any>('');
  const [showNameIcon, setShowNameIcon] = useState<boolean>(true);
  const [showFinIcon, setShowFinIcon] = useState<boolean>(true);
  const [showEmailIcon, setShowEmailIcon] = useState<boolean>(true);
const[emailerror ,setemailerror]=useState(false)
const [nameerror, setnameerror] = useState(false);
const [finerror, setfinerror] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const  {setUserData}  = useContext<any>(UserContext);

  const handleNameChange = (text: string) => {
    setName(text);
    setnameerror(text.trim() === '')
  };
  const handleFinChange = (text: string) => {
    setFin(text);
    setfinerror(text.trim() === '')
  };
 
  const handleEmailChange = (text: string) => {
    setEmail(text);
    setemailerror(text.trim() === '' || !/\S+@\S+\.\S+/.test(text))
  };
 
  const login = async (user:any) => {
    try {
      if (!name || !fin.trim() || !email) {
        throw new Error('Please provide name, fin, and email');
      }
      const response = await axios.post('https://bankapi-2puz.onrender.com/api/user/sign-in', { name,fin,email});
      console.log("1");
      if (response.data.success) {
        setName('');
        setFin('');
        setEmail('');
        setIsLoading(false);
        setUserData(response.data.user);
        if (nameerror == name || emailerror == email || finerror == fin ) {
          setnameerror(true)
          setfinerror(true)
          setemailerror(true)
        } else {}
        setIsLoading(true);
        setTimeout(() => {
         setIsLoading(false);
       }, 3000);
          navigation.navigate('Confrim'); 
      }
      
      console.log(response.data);

    } catch (error:any) {
      console.log(error.message);
      <Text> Istifadəçi tapılmadı</Text>
      // navigation.navigate('Singup');
    }
}

  return (
    <View style={style.bacroundcontainer}>
      <View style={style.container}>
      <View style={style.imgecontainer}>
        <Image 
        style={{ 
          width: "100%",
          height: "100%",
        }}
        source= {require('../../../assets/imges/singin.png')}/>

      </View>
      <View style={style.inputview}>
        <View style={style.comontext1}>
      <Text style={style.text1}>Xoş Gəlmisiniz!</Text>
      <Text style={style.text2}>Zəhmət olmasa login olun</Text>
      </View>
        <View style={style.iconview}>
          <View style={style.iconContainer}>
            {showNameIcon && <FontAwesomeIcon icon={faUser} size={20} style={style.icon} />}
          </View>
          <TextInput
        style={[style.input, nameerror && style.errorInput]}    
        onChangeText={handleNameChange}
            value={name}
            placeholder="Ad"
            placeholderTextColor="gray"

          />
        </View>
       
      
        <View style={style.iconview}>
          <View style={style.iconContainer}>
            {showFinIcon && <FontAwesomeIcon icon={faIdCard} size={20} style={style.icon} />}
          </View>
          <TextInput
            style={[style.input, finerror && style.errorInput]} 
             onChangeText={handleFinChange}
            value={fin}
            placeholder="Fin"
            placeholderTextColor="gray"

          />
        </View>
        <View style={style.iconview}>
          <View style={style.iconContainer}>
            {showEmailIcon && <FontAwesomeIcon icon={faEnvelope} size={20} style={style.icon} />}
          </View>
          <TextInput
            style={[style.input, emailerror && style.errorInput]} 
             onChangeText={handleEmailChange}
            value={email}
            placeholder="Email"
            placeholderTextColor="gray"

          />
        </View>

        


      </View>

    <View style={style.touch}>
<TouchableOpacity style={style.button} disabled={isLoading} onPress={login}>
{isLoading ? (
        <ActivityIndicator color="white" />
      ) :(<Text style={style.title}>Giriş</Text>)}
      
      </TouchableOpacity>
      <View style={style.alredy}>
        <Text style={{    color: 'gray',}}>Hesabınız yoxdur?    </Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Singup')}  >
      <Text style={style.singin}>Qeydiyatdan kec</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
    </View>
  );
};
// navigation.navigate('Singin')
export default Singin;