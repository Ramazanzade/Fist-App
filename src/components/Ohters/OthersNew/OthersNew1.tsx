import { View, Text , TouchableOpacity} from 'react-native'
import React , {useState, useEffect}from 'react'
import stayle from '../../Ohters/OthersBank/stayle';
import axios from 'axios';
const OthersNew1 = ({ item, route , navigation }: any) => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
        const response = await axios.get(`https://bankapi-2puz.onrender.com/api/new2/news2`);
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
const { data } = route.params;


  return (
    <View style={{backgroundColor:'#23265A',flex:1}}>
      <View style={stayle.view}>
        <Text style={stayle.text}>{data.text}</Text>
      </View>
      <View style={stayle.view2}>
        <Text style={{color:'#FFFFFF'}}>{data.title}</Text>
      </View>
    
    </View>
  )
}

export default OthersNew1