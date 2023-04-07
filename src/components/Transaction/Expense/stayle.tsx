import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    text1: {
        fontSize: 10,
        fontWeight: '700'
    },
    text2: {
        fontSize: 40,
        fontWeight: '900'
    },
    img: {
        width: 410,
        height: 240,
        backgroundColor:'#FFFFFF',
        position:'relative',
        zIndex:-200
    },
    view: {
        flexDirection: 'row',
    },
    view1: {
        margin: 10,
        marginTop: 20
    },
    icon: {
        backgroundColor: '#23265A',
        width: "90%",
        height: 70,
        borderRadius: 10,
        alignItems: 'flex-start',
        margin:20
    },
    iconview: {
        flexDirection: 'column',
        justifyContent:'center',
        marginTop:30,
        marginLeft:10

    },
    iconview1: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    iconn:{
        marginTop:15,
        marginRight:20
    }

})