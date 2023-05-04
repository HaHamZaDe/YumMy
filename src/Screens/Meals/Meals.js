import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import MealCard from '../../Components/MealCard/MealCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';

const Meals = ({route, navigation}) => {
  const {category} = route.params;

  const {loading, data, error} = useFetch(`${Config.MEAL_API_URL}${category}`);

  const handleMealSelect = meal => {
    navigation.navigate('Detail', {meal});
  };

  const renderMealItem = ({item}) => (
    <MealCard mealData={item} onSelect={() => handleMealSelect(item.idMeal)} />
  );

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <SafeAreaView style={{backgroundColor: '#FFA000'}}>
      <FlatList
        data={data.meals}
        renderItem={renderMealItem}
        keyExtractor={item => item.idMeal}
      />
    </SafeAreaView>
  );
};

export default Meals;
