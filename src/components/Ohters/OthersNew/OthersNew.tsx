import { View, Text , TouchableOpacity} from 'react-native'
import React , {useState, useEffect}from 'react'
import stayle from '../../Ohters/OthersBank/stayle';
import axios from 'axios';
const OthersNew = ({ item, route , navigation }: any) => {

  const [products, setProducts] = useState([]);
  const { data } = route.params;

  const getProducts = async () => {
    try {
        const response = await axios.get(`https://bankapi-2puz.onrender.com/api/new1/news1`);
        console.log('data');
        setProducts(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
        console.log('catch');
    }
};

useEffect(() => {
    getProducts();
}, []);

  return (
    <View style={{backgroundColor:'#121433',flex:1}}>
      <View style={stayle.view}>
        <Text style={stayle.text}>{data.text}</Text>
      </View>
      <View style={stayle.view2}>
        <Text  style={{color:'#FFFFFF'}}>{data.title}</Text>
      </View>
    
    </View>
  )
}

export default OthersNew