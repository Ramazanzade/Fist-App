import { View, Text, Button, TouchableOpacity,TextInput, ActivityIndicator } from 'react-native'
import React, { useState,useEffect,useRef} from 'react'
import style from '../Singup/style'
import stayle from './stayle';

const Confirm = ({navigation}:any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(1 * 60); 
  const [confirmed, setConfirmed] = useState(false);
  const [code, setCode] = useState({
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
  });
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          if (confirmed) {
            setTimer(1 * 60);
            setConfirmed(false);
          }
          return prevTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [confirmed]);
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const handleContentSizeChange = ({ nativeEvent: { contentSize } }:any) => {
    const inputHeight = contentSize.height;
    const fontSize = inputHeight / 2; 
    setInputStyle({ ...inputStyle, fontSize });
  };

  const [inputStyle, setInputStyle] = useState({
    height: 80,
    fontSize: 20, 
    width:80,
  })

  const handleCodeChange = (key:any, value:string) => {
    setCode((prevCode) => ({ ...prevCode, [key]: value }));
  };
  const focusNextInput = (nextInput:any) => {
    nextInput.current.focus();
  };

  const verify = () => {
    const { digit1, digit2, digit3, digit4 } = code;
    const enteredCode = `${digit1}${digit2}${digit3}${digit4}`;
    if (enteredCode === "1111") {
 navigation.navigate('Tabbar', {
          screen: 'Home',
          params: {}
        })
      // navigation.navigate("Singup")
      
      }
  }
  return (
      <View style={stayle.view}>
        <View style={stayle.view1}>
        <View>
          <Text style={stayle.text1}>Parolunuzu Daxil edin</Text>
        </View>
<View style={stayle.inputview}>
  <TextInput 
  ref={input1Ref}
  keyboardType="numeric"
  maxLength={1}
  style={[stayle.input, inputStyle]}
  onContentSizeChange={handleContentSizeChange}
  onChangeText={(value) => {handleCodeChange('digit1', value); focusNextInput(input2Ref)}}
  multiline
  />
 <TextInput
  keyboardType="numeric"
  maxLength={1}
  ref={input2Ref}
  style={[stayle.input, inputStyle]}
  onChangeText={(value) =>{ handleCodeChange('digit2', value); focusNextInput(input3Ref)}}
  />
  <TextInput
  keyboardType="numeric"
  maxLength={1}
  ref={input3Ref}
  style={[stayle.input, inputStyle]}
  onChangeText={(value) => {handleCodeChange('digit3', value); focusNextInput(input4Ref)}}
  />
 <TextInput
  keyboardType="numeric"
  maxLength={1}
  ref={input4Ref}
  style={[stayle.input, inputStyle]}
  onChangeText={(value) => handleCodeChange('digit4', value)}
  />
</View>

     {/* <View style={stayle.timeview}>
      <Text style={stayle.time}>{`${minutes}:${seconds < 10? '0' : ''}${seconds}`}</Text>
    </View> */}

        </View>
        <View style={stayle.view2}>
        <View style={style.touch}>
          <TouchableOpacity style={style.button} disabled={isLoading} onPress={verify}>
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (<Text style={style.title}>Daxil ol</Text>)}
          </TouchableOpacity>
        </View>
        </View>
      </View>
  )
}

export default Confirm