import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import io from 'socket.io-client';
const socket = io('https://bankapi-2puz.onrender.com');
export default function App() {
  const [messages, setMessages] = useState<any>([]);
  const [message, setMessage] = useState('');
  console.log("Dialog");

  const sendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    socket.on('message', (data) => {
      console.log('Message from admin:', data);
      setMessages((prevMessages: any) => [...prevMessages, { id: Date.now(), message: data }]);
      //setMessages({ id: Date.now(), message: data });
    }); 
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#121433' }}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text style={{color:'#FFFFFF'}}>{item.message}</Text>
          </View>
        )}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, height: 40, margin: 10, borderWidth: 1, padding: 10, color: '#FFFF', borderColor: '#23265A', borderRadius: 10 }}
          value={message}
          onChangeText={(text) => setMessage(text)} />
        <TouchableOpacity style={{ borderWidth: 2, borderColor: '#2567F9', backgroundColor: "#2567F9", height: 40, borderRadius: 10 }} onPress={() => sendMessage()}>
          <Text style={{ marginTop: 2, padding: 5, color: '#FFFF' }}>Göndər</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
