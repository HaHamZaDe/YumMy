import React from 'react';
import LottieView from 'lottie-react-native';
import {View, StyleSheet} from 'react-native';
import errorAnimation from '../../assets/error.json';

const Error = () => {
  return (
    <View style={styles.container}>
      <LottieView source={errorAnimation} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Error;
