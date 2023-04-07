import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textTransform: 'uppercase',
    },
    midelverbuton: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor:'#121433'
    },
    toucbutton: {
        alignItems: 'center'
    },
    button: {
        width: '90%',
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
    
    },
    title2: {
        fontSize: 50,
        fontWeight: '900',
        width: '85%',
        margin: 20,
        color:'#FFFFFF'
    },
    title3: {
        fontSize: 15,
        fontWeight: '400',
        marginLeft: 20,
        color:'#FFFFFF'

    }
})