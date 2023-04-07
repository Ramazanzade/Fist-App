import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState , useContext} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import stayle from './stayle'
import moment from 'moment'
import { usecontextcurrent } from '../../../Context/usecontextcurrent'
import { usecontextcurrent1 } from '../../../Context/usecontextcurrent1'

const Fhinis = ({ navigation, route, }: any) => {
    // const { current1, debt } = route.params;
    const currentDate = moment();
    const{current1 , updateUser} = useContext<any>(usecontextcurrent)

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#121433'
        }} >
            <View>
                <Image
                    style={stayle.imge}
                    source={require('../../../../assets/imges/expensefhinis.png')} />
            </View>
            <View style={stayle.textview1}>
                <Text style={stayle.text2}>Təbriklər!</Text>
                <Text style={stayle.text3}>Ödəniş uğurla həyata kecirildi</Text>
            </View>

            <View style={stayle.view1}>
                <View style={stayle.textview1}>
                    <View style={stayle.view2}>
                        <Text style={stayle.text5}>Ödənilən məbləğ :   {route.params.current1}  manat</Text>
                        <Text style={stayle.text5}>Tarix :  {currentDate.format('DD/MM/YYYY')}</Text>
                    </View>
                    <Text style={stayle.xet}> -- -- -- -- -- -- -- -- -- -- -- -- -- --  -- -- -- -- --  --  -- -- -- -- -- -- --</Text>
                    <View style={stayle.view3}>
                        <TouchableOpacity onPress={() => {
                    updateUser(route.params.current1);
                        }}>
                            
                            <Text style={{ color: '#FFFFFF' }}></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={stayle.button} onPress={() => {
                    updateUser(route.params.current1);
                    navigation.navigate('Home');
                }
                }>
                    <Text style={stayle.title} >Qəbz</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Fhinis 
