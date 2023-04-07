import { createStore, combineReducers } from 'redux';
import {setData} from './redux/redux1';
import {setCurrentDate} from './redux/redux1';
const rootReducer = combineReducers({
  setData: setData,
  setCurrentDate:setCurrentDate
});

const store = createStore(rootReducer);

export default store;


// import { View, Text } from 'react-native'
// import React from 'react'

// const store = () => {
//   return (
//     <View>
//       <Text>store</Text>
//     </View>
//   )
// }

// export default store