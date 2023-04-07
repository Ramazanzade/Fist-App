import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import stayle from './stayle';

const Food = ({navigation }:any) => {
    const DATA = [
        { id: 1, category: 'Wolt', img: "https://d21buns5ku92am.cloudfront.net/69274/documents/43826-1608038201-Wolt_logo_RGB-86ecff-medium.png" },
        { id: 2, category: ' Cayki' , img:'data:image/jpeg;base64,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'},
        { id: 3, category: 'Lover ' , img:'https://cdn5.vectorstock.com/i/1000x1000/44/39/love-restaurant-application-theme-logo-template-vector-19704439.jpg' },
        { id: 4, category: 'X restoran', img:"https://www.logodesign.net/images/tutorials/restaurent-logos/restaurant-logo-designer-needs.png" },
    ];

    const renderitem = ({ item }: any) => {
        return (
            <View>
                <View style={stayle.view}>
                    <TouchableOpacity style={stayle.touc} onPress={() =>navigation.navigate('Carpeyment')}>
                        <Image
                            style={stayle.img}
                            source={{
                                uri: item.img,
                            }} />
                        <Text style={stayle.text}> {item.category} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{backgroundColor:'#121433',flex:1}}>
            <FlatList
                data={DATA}
                renderItem={renderitem}
            />
        </View>

    )
}

export default  Food
 
