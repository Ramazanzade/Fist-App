import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  bacroundcontainer: {
    flex: 1,
    backgroundColor: '#23265A'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#121433',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    marginTop: 50
  },
  input: {
 
    borderRadius: 15,
    width: "85%",
    marginBottom: 20,
    position: 'relative',
    color:'#FFFFFF',
    textAlign: 'left',
    paddingLeft: 50,
    backgroundColor:'#23265A'
    
  },

  placeholder: {
    margin: 5,
    color:'#FFFFFF'
  },
  placeholderTextColor:{
    color:'#FFFFFF'

  },
  inputview: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    padding: 10,
    position: 'absolute',
    zIndex: 15,
    margin: 7
  },
  icon: {
    color: '#FFFFFF',
  },
  iconview: {
    flexDirection: 'row',
  },
  text1: {
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 2,
    color:'#FFFFFF'
    
  },
  text2: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 5,
    color:'#FFFFFF'
  },
  comontext: {
    marginVertical: 10,
    marginRight: "55%",
    marginTop: 50

  },
  comontext1: {
    marginVertical: 10,
    marginRight: "40%",
    marginTop: 50

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
    marginTop:20,
    marginBottom: 40,
 
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
  errorInput: {
    borderColor: 'red'
  },
  imge: {
    width: "80%",
    height: "130%",
  },
  imgecontainer: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 50,
    marginTop: 20,

  },
  alredy: {
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'red',

  },
  singin: {
    color: '#FFFFFF',
    marginBottom: 30
  }

})