import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React , {useState , useEffect} from 'react'
import stayle from './stayle';
import axios from 'axios';

const OthersBank = ({navigation}:any) => {
  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);
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


const getProducts1 = async () => {
  try {
      const response = await axios.get(`https://bankapi-2puz.onrender.com/api/new1/news1`);
      console.log('data');
      setProducts1(response.data);
  } catch (error) {
      console.error('Error fetching products:', error);
      console.log('catch');
  }
};

useEffect(() => {
  getProducts1();
}, []);


const getProducts2 = async () => {
  try {
      const response = await axios.get(`https://bankapi-2puz.onrender.com/api/new2/news2`);
      console.log('data');
      setProducts2(response.data);
  } catch (error) {
      console.error('Error fetching products:', error);
      console.log('catch');
  }
};

useEffect(() => {
  getProducts2();
}, []);

  const renderItem = ({ item }: any) => {
    return (
      <View style={stayle.view}>
        <TouchableOpacity style={stayle.touc} onPress={()=>navigation.navigate('Component' , { data: item }) }>
         <View style={stayle.view1}>
         <Text style={stayle.text2}>{item.text}</Text>
          <Text style={stayle.text23}>{item.date}</Text>
         </View>
        </TouchableOpacity>
      </View>
    )
  }

  const renderItem2 = ({ item }: any) => {
    return (
      <View style={stayle.view2}>
        <TouchableOpacity style={stayle.touc1} onPress={()=>navigation.navigate('OthersNew' , { data: item }) } >
         <View style={stayle.view3}>
         <Text style={stayle.text4}>{item.text}</Text>
         </View>
        </TouchableOpacity>
      </View>
    )
  }
  const renderItem3 = ({ item }: any) => {
    return (
      <View style={stayle.view2}>
        <TouchableOpacity style={stayle.touc1} onPress={()=>navigation.navigate('OthersNew' , { data: item }) }>
         <View style={stayle.view4}>
         <Text style={stayle.text4}>{item.text}</Text>
         </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={stayle.container}>
      <View>
        <Text style={stayle.text3}> Sənə özəl</Text>
        <FlatList
        style={stayle.flat}
          data={products}
          renderItem={renderItem}
          horizontal={true}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View>
        <Text style={stayle.text3}> Xəbərlər</Text>
        <FlatList
        style={stayle.flat}
          data={products1}
          renderItem={renderItem2}
          horizontal={true}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <Text style={stayle.text3}> Partnyor və əməktaşlarımız</Text>
        <FlatList
        style={stayle.flat}
          data={products2}
          renderItem={renderItem3}
          horizontal={true}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default OthersBank