import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import stayle from './stayle';

const Wifi = ({navigation}:any) => {
    const DATA = [
        { id: 1, category: 'Aztelecom', img: "" },
        { id: 2, category: ' Alfanet' },
        { id: 4, category: 'Avirtel ' },
        { id: 5, category: 'Azdatacom ' },
        { id: 6, category: 'AzəriNet ' },
        { id: 7, category: 'Azstarnet ' },
        { id: 8, category: 'AzEuroTel ' },
        { id: 9, category: 'Artkom ' },
        { id: 10, category: 'Qafqaznet ' },
        { id: 11, category: 'Sazz' },

    ];

    const renderitem = ({ item }: any) => {
        return (
            <View>
                <View style={stayle.view}>
                    <TouchableOpacity style={stayle.touc} onPress={() =>navigation.navigate('Carpeyment')}>
                        <Image
                            style={stayle.img}
                            source={{
                                uri: 'https://i.pinimg.com/originals/b2/a2/e1/b2a2e191cce6d71272731f14cbc74474.jpg',
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

export default  Wifi 
