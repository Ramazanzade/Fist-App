import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

export default StyleSheet.create({
   view:{
marginHorizontal:30,
   },
   text:{
fontSize:20,
fontWeight:'900',
marginLeft:16,
color:'#FFFFFF'
},
   text2:{
    fontSize:20,
    fontWeight:'500',
    color:'#FFFFFF',
    marginLeft:10 ,

   },
   
   text23:{
    fontSize:10,
    fontWeight:'500',
    color:'#FFFFFF'

   },
   view1:{
position:'absolute',
zIndex:15,
marginLeft:80 ,
marginTop:25
   },
   flat:{

   },
   touc:{
backgroundColor:'#23265A',
width:140,
height:75,
borderRadius:20,
position:'relative',
borderBottomWidth:4,
borderWidth:2,
borderColor:'#417D7A'
   },
   text3:{
fontSize:20,
fontWeight:'900',
marginBottom:10,
color:'#FFFFFF'
   },
   touc1:{
    width: Dimensions.get('window').width-50,
    height: 180,
    backgroundColor:'#23265A',
    borderRadius:20,
  
   },
   view2:{
marginHorizontal:50 ,
   },
   text4:{
fontSize:30,
fontWeight:'900',
color:'#FFFFFF'

   },
   text5:{
    fontSize:15,
    fontWeight:'700',
    color:'#FFFFFF'

   },
   view3:{
    margin:20,
    alignItems:'flex-end',
  },
  view4:{
    margin:30,
    alignItems:'flex-end',
  },
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around',
    backgroundColor:'#121433'

  }

})