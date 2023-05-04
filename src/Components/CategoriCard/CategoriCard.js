import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoriCard.style';

const CategoriCard = ({categori, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: categori.strCategoryThumb}} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{categori.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriCard;
