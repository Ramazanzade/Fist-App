import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import stayle from './stayle';

const Kocurma = () => {
    const DATA = [
        { id: 1, category: 'Mobil nömrə i.', img: "" },
        { id: 2, category: '  Karlarım a.' },
        { id: 3, category: 'Digər karta ' },
        { id: 4, category: 'Digər Bank' },
        { id: 5, category: ' Ölkə xaricinə' },
        { id: 6, category: 'Anipay ilə ' },
    ];

    const renderitem = ({ item }: any) => {
        return (
            <View>
                <View style={stayle.view}>
                    <TouchableOpacity style={stayle.touc} onPress={() => { item.id }}>
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

export default  Kocurma
 
