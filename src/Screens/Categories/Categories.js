import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import CategoriCard from '../../Components/CategoriCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';

const Categories = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.CATEGORY_API_URL);

  const renderCategoryItem = ({item}) => (
    <CategoriCard
      categori={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  const handleCategorySelect = category => {
    navigation.navigate('Meals', {category});
  };

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <SafeAreaView style={{backgroundColor: '#FFA000'}}>
      <FlatList
        data={data.categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.idCategory}
      />
    </SafeAreaView>
  );
};

export default Categories;
