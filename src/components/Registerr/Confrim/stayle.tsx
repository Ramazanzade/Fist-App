import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor:'#121433'
    },
    view1: {
        marginHorizontal: 15
    },
    view2: {
        marginHorizontal: 15
    },
    text1: {
        fontSize: 30,
        fontWeight: "800",
        color:'#FFFFFF'

    },
    text2: {
        fontSize: 17,
        fontWeight: "500",
        marginBottom: 20,
        marginLeft: 15,
        color:'#FFFFFF'

    },
    text3: {
        marginRight: 5,
        marginBottom: 30,
        marginLeft: 18,
        color:'#FFFFFF'


    },
    sendagain: {
        flexDirection: 'row',
        color:'#FFFFFF'

    },
    input: {
        width: 80,
        height: 80,
        borderRadius: 10,
        textAlign: 'left',
        paddingLeft: 30,
        color:'#FFFFFF',
        backgroundColor:'#23265A'
    },
    inputview: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40
    },
    time: {
        fontSize: 30,
        color:'#417D7A'
    },
    timeview: {
        marginTop: 40,
        marginLeft: 18
    }
})