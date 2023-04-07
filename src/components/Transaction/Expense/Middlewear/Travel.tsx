import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import stayle from './stayle';

const Travel = ({navigation}:any) => {
    const DATA = [
        { id: 1, category: 'Avises', img: "" },
        { id: 2, category: ' Duabi' },
        { id: 3, category: 'Belin ' },
        { id: 4, category: ' Turkish air' },
        { id: 5, category: 'Qatar ' },
        { id: 6, category: 'Moskova' },
        { id: 7, category: 'X air ' },
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

export default Travel 
