import React, { useState, useEffect , useContext } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../Registerr/Singup/style';
import stayle from '../Home/stayle';
import { usecontextcurrent } from '../Context/usecontextcurrent';
import { usecontextcurrent1 } from '../Context/usecontextcurrent1';
import moment from 'moment'


const StatusHome = () => {
  const { current1, setcurrent } = useContext<any>(usecontextcurrent)

  const currentDate = moment();

  const renderItem = ({ item }: any) => {
    console.log(item);
    
    return (
      <View>
        <TouchableOpacity style={stayle.budgetbutton1}>
          <View style={stayle.budgetview}>
            <View style={stayle.budgetview1}>
              <View style={stayle.budgeticon}>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={stayle.tabIcon2}
                  size={20}
                />
              </View>
              <View>
                <Text style={stayle.date}>{currentDate.format('DD/MM/YYYY')}</Text>
              </View>
            </View>
            <View>
              <Text style={stayle.mony}>{item}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  return (
    <View style={{ backgroundColor: '#121433', flex: 1 }}>
      <FlatList
        data={current1}
        renderItem={renderItem}
      />
    </View>
  )
}

export default StatusHome;
