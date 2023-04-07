import { View, Text ,Dimensions, Image, SafeAreaView, StatusBar, FlatList,TouchableOpacity , } from 'react-native'
import React ,{useState,useRef} from 'react'
import stayle from './stayle';
const {width , height}=Dimensions.get('window');
const colors ={primary:'#282534', white:'#ffff'};
const imges=[
    {
        id:1,
        imge:require('../../assets/imges/imege1.png'),
        title:'Welcome to we Bank',
        subtitle:'Your trusted partner in banking'
    },
    {
        id:2,
        imge:require('../../assets/imges/imege2.png'),
        title:'Secure banking made easy ',
        subtitle:'Enjoy fast and secure banking services'
    },
    {
        id:3,
        imge:require('../../assets/imges/im.png'),
        title:'Lets get started with',
        subtitle:'Banking made convenient with we Bank '
    },
    
]


const Slide = ({item}:any) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={ item?.imge }
        style={{height: '80%', width, resizeMode: 'contain'}}
      />
      <View>
        <Text style={stayle.title}>{item?.title}</Text>
        <Text style={stayle.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};




const Onboarding = ({navigation}:any) => {
  // const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef<any>();
  const updateCurrentSlideIndex = ({e}:any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== imges.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = imges.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {imges.map((_, index) => (
            <View
              key={index}
              style={[
                stayle.indicator,
                currentSlideIndex == index && {
                  backgroundColor: colors.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View style={{marginBottom: 20,}}>
          {currentSlideIndex == imges.length - 1 ? (
            <View style={{height: 50, }}>
              <TouchableOpacity
                style={[stayle.btn,{ 
                  backgroundColor: '#2567F9',}]}
                onPress={() =>navigation.navigate('Middlewear')}>
                <Text style={{fontWeight: 'bold', fontSize: 15 , color:'#FFFFFF'}}>
                  Başla
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  stayle.btn,
                  {
                    
                    backgroundColor: '#2567F9',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: colors.white,
                    
                   
                  }}>
                  Kec
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={stayle.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  Nöbəti
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#121433'}}>
      <StatusBar backgroundColor={colors.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={imges}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};
export default Onboarding