import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  input: {
    borderBottomWidth: 3,
    borderColor: '#23265A',
    margin: 20,
    borderRightWidth: 1,
    width: '70%', 
    color:'#FFFFFF'
  },
  button: {

    width: "80%",
    backgroundColor: '#2567F9',
    borderRadius: 10,
    paddingVertical: 22,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 50,
  
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  touch: {
    alignItems: 'center',
  },
  view: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    backgroundColor:'#121433'

  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    color:'#FFFFFF',
    margin:5
    
  },
  flatlist: {
    flexDirection: 'column',
    marginTop: "15%",
    marginBottom:'20%'

  },
  img: {
    width: 150,
    height: 90,
    marginTop: '10%',
    marginLeft: 10,

  },
  imgview: {
    alignSelf: 'flex-start',
    flexDirection: 'row'

  },
  text1: {
    alignItems: 'center',
    marginTop: "22%",
    fontSize: 20,
    fontWeight: '600',
    marginLeft: -30,
    color:'#FFFFFF'
  },
  textview:{
    backgroundColor:'#23265A',
    borderRadius:10,
    padding:30,
    borderWidth:1,
    borderColor:'#23265A',
    borderBottomWidth:3
  },
  imge:{
    width:350,
    height:300,
    marginTop:'5%',
    alignSelf:'center'
  },
  textview1:{
flexDirection:'column',
alignContent:'center',
alignItems:'center',
  },
  text2:{
fontSize:30,
fontWeight:'700',
color:'#FFFFFF'

  },
  text3:{
    fontSize:10,
    fontWeight:'500',
    color:'#FFFFFF'


  },
  view1:{
    flexDirection:'column',
    alignItems:'center',
    marginTop:100,
  },
  view2:{
flexDirection:'row',
justifyContent:'space-evenly',
marginBottom:70
  },
  xet:{
color:'green',
marginTop:-30,
// marginBottom:30
  },
  view3:{
// flexDirection:'row',
// justifyContent:'space-between'
  },
  text5:{
    fontSize:15,
    marginHorizontal:'10%',
justifyContent:'space-evenly',
color:'#FFFFFF'

  },
  touc:{
    backgroundColor:'#2567F9',
    borderRadius:10,
    padding:10,
    marginLeft:"60%",
margin:10
  
  }
})