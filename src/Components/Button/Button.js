import React from 'react';
import {Pressable, Text, Linking} from 'react-native';
import styles from './Button.style';

const Button = ({title, url}) => {
  return (
    <Pressable style={styles.container} onPress={() => Linking.openURL(url)}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;
