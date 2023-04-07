import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import stayle from './stayle';

const Education = ({navigation}:any) => {
    const DATA = [
        { id: 1, category: 'Ali təhsil', img: "" },
        { id: 2, category: ' Orta təhsil' },
        { id: 3, category: 'Lisey ödınişi ' },
        { id: 4, category: 'Digər özəl kurslar ' },
        { id: 5, category: ' DİM' },
        { id: 6, category: 'Təhsil Nazirliyi ' },
        { id: 7, category: 'Bağca ' },
    ];

    const renderitem = ({ item }: any) => {
        return (
            <View>
                <View style={stayle.view}>
                    <TouchableOpacity style={stayle.touc} onPress={() =>navigation.navigate('Govmentpeyment')}>
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

export default  Education 
