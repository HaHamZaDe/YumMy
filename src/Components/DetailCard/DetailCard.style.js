import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA000',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 250,
  },
  body: {
    flex: 1,
    margin: 10,
    justifyContent: 'space-between',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    fontSize: 20,
    color: 'black',

    fontWeight: 'bold',
  },

  area: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  instructions: {
    textAlign: 'justify',
    color: 'black',
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
  },
});
