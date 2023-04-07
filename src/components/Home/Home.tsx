import React, { useState, useContext, useEffect } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import stayle from './stayle';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarAlt, faChevronDown, faPlane, faArrowLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../Context/UserContext';
import axios from 'axios';
import { usecontextcurrent } from '../Context/usecontextcurrent';
import moment from 'moment'
import  AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation, route }: any) => {
  const { userData, setUserData } = useContext<any>(UserContext);
  const [hideNumbers, setHideNumbers] = useState(false);
  const { current1, setcurrent } = useContext<any>(usecontextcurrent)
  const handleToggleHideNumbers = () => {
    setHideNumbers(!hideNumbers);
  };
  const currentDate = moment();

  const cart = () => {
    return (
      <View style={stayle.cartview}>
        <TouchableOpacity onPress={handleToggleHideNumbers}>
          {hideNumbers
            ? <FontAwesomeIcon icon={faEye} style={stayle.tabIcon5} size={20} />
            : <FontAwesomeIcon icon={faEyeSlash} style={stayle.tabIcon5} size={20} />
          }
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={stayle.carttouc}>
            <View style={stayle.cartdetei2}>
              <Text style={stayle.name}>{userData.name}</Text>
              <Text style={stayle.amount}>{userData.amount}</Text>
            </View>
            <View style={stayle.cartdetei1}>
              {hideNumbers
                ? <Text style={stayle.number}>{userData.digital}</Text>
                : <Text style={stayle.number}>****************</Text>
              }
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  const renderItem = ({item}: any) => {
    return (
      <View>
        <TouchableOpacity style={stayle.budgetbutton1} >
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
    <View style={stayle.container}>
      <View style={stayle.inexview}>
        <View>
          <FlatList
            data={Object.values(userData)}
            renderItem={cart}
            horizontal={true}
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        </View>
      </View>
      <View style={stayle.deteview}>
        <Text style={stayle.text3}>  Xərcləriniz </Text>
      </View>
      <FlatList
        data={current1}
        renderItem={renderItem}
      />
    </View>
  )
};

export default Home;