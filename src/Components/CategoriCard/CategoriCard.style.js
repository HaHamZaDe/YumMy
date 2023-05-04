import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 53,
    borderBottomLeftRadius: 53,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    padding: 3,
    height: 106,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  bodyContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#424242',
  },
});
