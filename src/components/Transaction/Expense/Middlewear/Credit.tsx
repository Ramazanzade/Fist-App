import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import stayle from './stayle';

const Credit = ({navigation}:any) => {
    const DATA = [
        { id: 1, category: 'Digər şəxsin krediti', img: "" },
        { id: 2, category: 'Azərcart ödənişi' },
        { id: 3, category: 'Code Academy' },
        { id: 4, category: 'İrşad ' },
        { id: 5, category: 'Baku Electoronis' },
        { id: 6, category: 'Kontakt Home' },
        { id: 7, category: 'Optimal' },
        { id: 8, category: 'Saliton' },
        { id: 9, category: ' Merkuri Bokt' },
        { id: 10, category: 'Üorld Telecom' },
        { id: 11, category: 'Regional Bokt' },
        { id: 12, category: 'Molbulak' },
        { id: 13, category: 'Kred Aqro' },
        { id: 14, category: 'Ipoteka ödənişi' },
        { id: 15, category: 'Ipoteka ödənişi' },
        { id: 16, category: 'Ipoteka ödənişi' },
        { id: 17, category: 'Ipoteka ödənişi' },
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

export default Credit