import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import stayle from './stayle';

const Comunal = ({navigation}:any) => {
    const DATA = [
        { id: 1, category: 'Azərişıq', img: "" },
        { id: 2, category: ' AzərSu' },
        { id: 3, category: 'Azərİstilik ' },
        { id: 4, category: 'Azərqaz ' },
        { id: 5, category: 'Mənzil ' },
        { id: 6, category: 'X MMC' },
        { id: 7, category: 'Parking' },
        { id: 8, category: 'Y MMC' },
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

export default Comunal