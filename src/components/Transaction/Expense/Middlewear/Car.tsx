import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import stayle from './stayle';

const Car = ({navigation ,source}:any) => {
    const DATA = [
        { id: 1, category: 'Mercedes', img: "https://i.pinimg.com/originals/86/0d/26/860d2666caf66420dffeeb98a1662f74.jpg" },
        { id: 2, category: ' Hundai' , img:'https://logowik.com/content/uploads/images/hyundai1362.jpg'},
        { id: 3, category: 'Toyota ', img:'https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png' },
        { id: 4, category: 'Mazda' , img:'https://cdnb.artstation.com/p/assets/images/images/042/458/213/large/amy-liew-mazda-logo-render.jpg?1634576257'},
        { id: 5, category: ' Mitsubish' , img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mitsubishi_logo.svg/800px-Mitsubishi_logo.svg.png'},
        { id: 6, category: 'Lexcuse ' , img:'https://toyotaassets.scene7.com/is/image/toyota/Lexus_logo_4E4ABD922583A135140CD1AC3C6CAFF83B074DF4-864x600?wid=680&hei=452' },
        { id: 7, category: 'Xəzər', img:'https://xazar-lada.az/assets/img/Logo2.png' },      
        { id: 7, category: 'Naz Lifan', img:'http://aada.az/uploads/posts/2020-06/1591883680_1591883624066.png' },

    ];

    const renderitem = ({ item }: any) => {
        return (
            <View>
                <View style={stayle.view}>
                    <TouchableOpacity style={stayle.touc} onPress={() =>navigation.navigate('Carpeyment') }>
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

export default  Car
 
