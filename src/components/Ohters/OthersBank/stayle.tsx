import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    view: {
        width: "90%",
        height: "30%",
        borderRadius: 40,
        margin: 20,
        borderWidth:2,
        borderColor:'#8F3CFF',
        backgroundColor:'#8F3CFF'
    },
    text: {
        fontSize: 40,
        fontWeight: '900',
        textAlign: 'right',
        marginRight: 20,
        marginTop: 20,
        color: '#fff',
        
    },
    text1: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'right',
        marginRight: 20,
        color: '#fff'
    },
    view2: {
        height: '45%',
        margin: 25
    },
    touc: {
        alignItems: 'center'
    }
})