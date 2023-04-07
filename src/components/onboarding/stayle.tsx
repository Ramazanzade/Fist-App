import { StyleSheet } from 'react-native'
const colors = { primary: '#282534', white: '#ffff' }
export default StyleSheet.create({
  imgeview: {
    alignItems: 'center'
  },
  imge: {
    height: '5%',
    resizeMode: 'contain',
    width:'50%'

  },
  title: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center'
  },
  subtitle: {
    color: colors.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23
  },
  view: {
    flex: 1,
    backgroundColor: colors.primary
  },
  statusbar: {
    backgroundColor: colors.primary
  },
  image: {
    height: '50%',
    width: '50%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 9,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.white,
  }
})