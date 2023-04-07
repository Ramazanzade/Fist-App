import { View, Text , TouchableOpacity} from 'react-native'
import React , {useState ,useEffect} from 'react'
import stayle from './stayle';
import style from '../../Registerr/Singup/style';
import axios from 'axios';

const Component = ({ item, route , navigation }: any) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
        const response = await axios.get(`https://bankapi-2puz.onrender.com/api/new/news`);
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
    <View style={{backgroundColor:'#121433',flex:1}} >
      <View style={stayle.view}>
        <Text style={stayle.text}>{data.text}</Text>
        <Text style={stayle.text1}>{data.date}</Text>
      </View>
      <View style={stayle.view2}>
        <Text style={{color:"#FFFFFF"}}>{data.title}</Text>
      </View>
      <View style={stayle.touc}>
      <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Diolog')}>
                    <Text style={style.title} >Müraciyyət et</Text>
                </TouchableOpacity>
      </View>
    </View>
  )
}

export default Component