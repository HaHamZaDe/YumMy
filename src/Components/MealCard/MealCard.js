import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({mealData, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: mealData.strMealThumb}} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{mealData.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
