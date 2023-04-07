import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#121433'
    },
    headreview: {
        flexDirection: 'row',
    },
    textview: {
        marginLeft: 10
    },
    text1: {
        fontSize: 25,
        fontWeight: '800'
    },
    text2: {
        fontSize: 17,
        fontWeight: '400',
        marginLeft: 10,
        marginTop: 5
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    deteview: {
        flexDirection: 'row',
        margin:25
        // justifyContent:'space-around',
        // alignItems: 'center'
    },
    button: {
        backgroundColor: '#383838',
        borderRadius: 10,
        width: 120,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomWidth:4,
        borderWidth:2,
        borderColor:'#417D7A'
    },
    text4: {
        textAlign: 'center',
        marginTop: 14,
        color:'#FFFFFF'
    },
    tabIcon: {
        color: '#FFFFFF',
        marginTop: 14,
    },
    text3: {
        fontSize: 20,
        fontWeight: '900',
        color:'#FFFFFF'

    },
    tabIcon1: {
        marginTop: 19,
        color:'#FFFFFF'
    },

    contentContainer: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    button2: {
        backgroundColor: '#C4C4C40A',
        borderRadius: 10,
        width: 70,
        height: 35,
        
    },
    text5: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        marginRight: 5,
        color: '#3E6166'
    },
    text6: {
        margin: 12,
        marginLeft: 13
    },
    imgincome: {
        width: 150,
        height: 150,
        marginHorizontal: 20,
        marginVertical: 15

    },
    imgexpenses: {
        width: 140,
        height: 140,
        marginHorizontal: 25,
        marginVertical: 15
    },
    incomeview: {
        backgroundColor: '#B6E0EB',
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 30

    },
    inexview: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text7: {
        fontSize: 16,
        marginBottom: 5
    },
    text8: {
        fontSize: 25,
        fontWeight: '900',
        marginBottom: 20

    },
    budgetbutton: {
        backgroundColor: '#C4C4C40A',
        borderRadius: 10,
        marginHorizontal: 20,
        width: Dimensions.get('window').width-40,
        height: 80,
        marginBottom:30,
        marginTop:30,
        borderBottomWidth:4,
        borderWidth:2,
        borderColor:'#417D7A'
    },
    budgetview: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        justifyContent: 'space-around',
        marginTop: 16
    },
    catogory: {
        fontSize: 20,
        fontWeight: '800',
        color:'#FFFFFF',
    },
    date: {
        color:'#FFFFFF',
        marginLeft:10,
        marginTop:13

    },
    mony: {
        fontSize: 20,
        fontWeight: '900',
        color:'#FFFFFF',

    },
    tabIcon2: {
        color: '#FFFFFF',
        marginTop: 10,
    },
    budgeticon: {
        backgroundColor: '#C4C4C40A',
        borderRadius: 5,
        width: 40,
        height: 40,
        alignItems: 'center',
        marginRight: 10,
        marginTop: 5,
     
        
    },
    budgetview1: {
        flexDirection: 'row',

        
    },
    cartview: {
        backgroundColor: '#2567F9',
        width: Dimensions.get('window').width-40,
        height: 180,
        margin: 20,
        borderRadius: 20,
        position: 'relative',
      
    },
    carttouc: {
        flexDirection: 'column',
        position: 'absolute',
        zIndex: 102,
        marginTop:-70
    },
    name: {
        color:'#FFFFFF',

    },
    cartdate: {
        color:'#FFFFFF',

    },
    number: {
        color:'#FFFFFF',

    },
    amount: {
        fontSize: 30,
        fontWeight: '700',
        color:'#FFFFFF',

    },
    cartdetei1: {
        margin: 10,
        marginLeft: 30
    },
    cartdetei2: {
        margin: 30,
        color:'#FFFFFF',

    },
    budgetbutton1: {
        backgroundColor: '#23265A',
        borderRadius:10,
        height:80,
        marginHorizontal:20,
        marginVertical:10,
        width: Dimensions.get('window').width-40,

    },
    tabIcon5:{
        color:'#FFFFFF',
        alignItems:'flex-end',
        alignContent:'flex-end',
        alignSelf:'flex-end',
        margin:20
    }

})



