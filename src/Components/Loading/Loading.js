import React from 'react';
import LottieView from 'lottie-react-native';
import {View, StyleSheet} from 'react-native';
import loadingAnimation from '../../assets/loading.json';

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView source={loadingAnimation} autoPlay loop />
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

export default Loading;
