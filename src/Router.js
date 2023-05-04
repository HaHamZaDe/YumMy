import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './Screens/Categories/Categories';
import Detail from './Screens/Detail/Detail';
import Meals from './Screens/Meals/Meals';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            title: 'Çeşit Çeşit Yemekler',
            headerTintColor: '#FFA000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{
            title: 'Farklı Lezzetler',
            headerTintColor: '#FFA000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'Lezzetin Kaynağı',
            headerTintColor: '#FFA000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
