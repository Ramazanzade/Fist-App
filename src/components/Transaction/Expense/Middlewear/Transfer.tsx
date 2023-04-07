import { View, Text, TouchableOpacity, Image , FlatList} from 'react-native'
import React from 'react'
import stayle from './stayle';

const Transfer = () => {
    const DATA = [
        { id: 1, category: 'USA', img: "" },
        { id: 2, category: ' TR' },
        { id: 3, category: 'RUBL ' },
        { id: 4, category: 'GBA ' },
        { id: 5, category: 'EUR ' },
        { id: 6, category: 'Dirhəm' },
    ];

    const renderitem = ({ item }: any) => {
        return (
            <View >
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

export default Transfer