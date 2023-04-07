import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import stayleh from './stayleh'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faChevronLeft, faArrowRightFromBracket,faLanguage , faBuilding , faCommentDots } from '@fortawesome/free-solid-svg-icons';

export default function ProfileHome({ navigation }: any) {
    return (
        <View style={{backgroundColor:'#121433', flex:1}}>
            <View>
                <View style={stayleh.touchview}>
                <View style={stayleh.touchview1}>
                    <TouchableOpacity style={stayleh.touc} onPress={() => navigation.navigate('Myprofile')}>
                        <View style={stayleh.icon}><FontAwesomeIcon color='#FFFFFF' icon={faUser} size={20} /></View>
                        <Text style={stayleh.text}>Profilim</Text>
                    </TouchableOpacity>
                </View>
                <View style={stayleh.touchview1}>
                    <TouchableOpacity style={stayleh.touc} onPress={() => navigation.navigate('ChangePassword')}>
                        <View style={stayleh.icon}><FontAwesomeIcon color='#FFFFFF' icon={faBuilding} size={20} /></View>
                        <Text style={stayleh.text}>Bank haqqinda</Text>
                    </TouchableOpacity>
                </View>
                <View style={stayleh.touchview1}>
                    <TouchableOpacity style={stayleh.touc} onPress={() => navigation.navigate('Language')}>
                        <View style={stayleh.icon}><FontAwesomeIcon color='#FFFFFF' icon={faLanguage} size={20} /></View>
                        <Text style={stayleh.text}>Dili dəyiş</Text>
                    </TouchableOpacity>
                </View>
                <View style={stayleh.touchview1}>
                    <TouchableOpacity style={stayleh.touc} onPress={() => navigation.navigate('Diolog')}>
                        <View style={stayleh.icon}><FontAwesomeIcon color='#FFFFFF' icon={faCommentDots} size={20} /></View>
                        <Text style={stayleh.text}>Əlaqə</Text>
                    </TouchableOpacity>
                </View>
                <View style={stayleh.touchview1}>
                    <TouchableOpacity style={stayleh.touc} onPress={() => navigation.navigate('Onboarding')}>
                        <View style={stayleh.icon}><FontAwesomeIcon color='#FFFFFF' icon={faArrowRightFromBracket} size={20} /></View>
                        <Text style={stayleh.text}>Çıxış</Text>
                    </TouchableOpacity>
                </View>
                
                </View>
            </View>
        </View>
    )
}