import { View, Text, TouchableOpacity, Image , Animated} from 'react-native'
import React , {useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faHome, faMoneyBillTransfer, faUser, faPeopleGroup, faCar, faGraduationCap, faCity, faGasPump, faPlane, faUtensils, faKitMedical, faTaxi, faPhone, faArrowsLeftRight, faCreditCard, faWifi } from '@fortawesome/free-solid-svg-icons';
import stayle from '../stayle';
import { ScrollView } from 'react-native-gesture-handler';

const Incomecategory = ({ navigation }: any) => {
    return (
        <ScrollView style={{backgroundColor:'#121433', flex:1}}>
            <View style={stayle.iconview}>
                <View style={stayle.iconview1}>
                <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Car')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faCar} size={40} color={'#FFFFFF'} style={stayle.iconn}/><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Maşın </Text></TouchableOpacity></View>
                <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Food')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faUtensils} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Yemək </Text></TouchableOpacity></View>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Transfer')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faMoneyBillTransfer} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Köcurmə </Text></TouchableOpacity></View>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Comunal')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faHome} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Komunal </Text></TouchableOpacity></View>
                </View>
                <View style={stayle.iconview1}>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Education')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faGraduationCap} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Təhsli </Text></TouchableOpacity></View>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Wifi')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faWifi} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>WI-FI </Text></TouchableOpacity></View>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Travel')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faPlane} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Səhayət </Text></TouchableOpacity></View>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Credit')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faCreditCard} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Kart </Text></TouchableOpacity></View>
                </View>
                <View style={stayle.iconview1}>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Full')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faGasPump} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Yanacağ </Text></TouchableOpacity></View>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Heath')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faKitMedical} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Səhiyyə </Text></TouchableOpacity></View>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Kocurma')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faArrowsLeftRight} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Valyuta </Text></TouchableOpacity></View>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Govment')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faCity} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Mənzil </Text></TouchableOpacity></View>
                </View>
                <View style={stayle.iconview1}>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Taxi')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faTaxi} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Taxsi </Text></TouchableOpacity></View>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Phone')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faPhone} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Telfon </Text></TouchableOpacity></View>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Cerme')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faPeopleGroup} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Cərimə </Text></TouchableOpacity></View>
                    <View style={stayle.icon}><TouchableOpacity onPress={()=>navigation.navigate('Iane')} style={{flexDirection:'row', marginLeft:30}}><FontAwesomeIcon icon={faUser} size={40} color={'#FFFFFF'} style={stayle.iconn} /><Text style={{color:'#FFFFFF', fontSize:35, marginTop:5}}>Digər </Text></TouchableOpacity></View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Incomecategory