import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faEnvelope, faIdCard, faL } from '@fortawesome/free-solid-svg-icons';
import style from './style';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../../../navigations/stacks/HomeScreen';
const Signup = () => {
  const navigation = useNavigation<any>();

  const [name, setName] = useState<any>('');
  const [surname, setSurname] = useState<any>('');
  const [fin, setFin] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [showNameIcon, setShowNameIcon] = useState<boolean>(true);
  const [showSurnameIcon, setShowSurnameIcon] = useState<boolean>(true);
  const [showFinIcon, setShowFinIcon] = useState<boolean>(true);
  const [showEmailIcon, setShowEmailIcon] = useState<boolean>(true);
  const [emailerror, setemailerror] = useState(false)
  const [nameerror, setnameerror] = useState(false);
  const [finerror, setfinerror] = useState(false);
  const [surnameerror, setsurnameerror] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const handleNameChange = (text: string) => {
    setName(text);
    setnameerror(text.trim() === '')
  };
  const handleSurnameChange = (text: string) => {
    setSurname(text);
    setsurnameerror(text.trim() === '')
  };
  const handleFinChange = (text: string) => {
    setFin(text);
    setfinerror(text.trim() === '')
  };
  const handleEmailChange = (text: string) => {
    setEmail(text);
    setemailerror(text.trim() === '' || !/\S+@\S+\.\S+/.test(text))
  };
  // const GoConfrim = (navigation: any) => {
  //   return () => {
  //     navigation.navigate('Confrim')
  //   }
  // }


  const errors = () => {
    if (nameerror == name || emailerror == email || finerror == fin || surnameerror == surname) {
      setnameerror(true)
      setfinerror(true)
      setemailerror(true)
      setsurnameerror(true)
    } else {
      // const navigateToConfirm = GoConfrim(navigation)
      // navigateToConfirm()
    }
  }
  
  const Register = async ({values}:any) => {
    try {
   
      const response = await axios.post('https://bankapi-2puz.onrender.com/api/user/create-user',
      {
        name: name,
        surname: surname,
        fin: fin,
        email:email,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      navigation.navigate('Tabbar', {
        screen: 'Home',
        params: {}
      })
    } catch (error:any) {
      console.log("error",error);
      navigation.navigate('Singin')
    } 
    errors()
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }


  return (
    <View style={style.bacroundcontainer}>
      <View style={style.container}>
        <View style={style.imgecontainer}>
          <Image
            style={style.imge}
            source={require('../../../assets/imges/singup.png')} />

        </View>
        <View style={style.inputview}>
          <View style={style.comontext}>
            <Text style={style.text1}>Qeydiyyat</Text>
            <Text style={style.text2}>Yeni hesab yarat</Text>
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
              {showSurnameIcon && <FontAwesomeIcon icon={faUser} size={20} style={style.icon} />}
            </View>
            <TextInput
              style={[style.input, surnameerror && style.errorInput]}
              onChangeText={handleSurnameChange}
              value={surname}
              placeholder="Soyad"
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
          <TouchableOpacity style={style.button} disabled={isLoading} onPress={Register}>
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (<Text style={style.title}  >Qeydiyat</Text>)}
          </TouchableOpacity>
          <View style={style.alredy}>
            <Text style={{    color: 'gray',}}>Qeydiyatınız var?   </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Singin')}  >
              <Text style={style.singin}>Giriş</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
// navigation.navigate('Singin')
export default Signup;