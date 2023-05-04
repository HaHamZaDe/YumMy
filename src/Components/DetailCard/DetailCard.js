import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './DetailCard.style';
import Button from '../Button';

const DetailCard = ({detailData}) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: detailData.strMealThumb}} style={styles.image} />
      <View style={styles.body}>
        <View>
          <View style={styles.title}>
            <Text style={styles.category}>{detailData.strCategory}</Text>
            <Text style={styles.area}>{detailData.strArea} Cuisine</Text>
          </View>
          <Text style={styles.name}>{detailData.strMeal}</Text>
          <Text style={styles.instructions}>{detailData.strInstructions}</Text>
        </View>
        <View style={styles.button}>
          <Button title="YouTube" url={detailData.strYoutube} />
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailCard;
