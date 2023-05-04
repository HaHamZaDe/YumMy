import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    height: 200,
    width: Dimensions.get('window').width / 1.05,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  bodyContainer: {
    position: 'absolute',
    padding: 4,
    width: Dimensions.get('window').width / 1.05,
    backgroundColor: '#3114024d',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'right',
  },
});
