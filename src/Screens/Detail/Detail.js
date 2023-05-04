import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import DetailCard from '../../Components/DetailCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';

const Detail = ({route}) => {
  const {meal} = route.params;

  const {loading, data, error} = useFetch(`${Config.DETAIL_API_URL}${meal}`);

  if (loading) return <Loading />;

  if (error) return <Error />;

  return <DetailCard detailData={data.meals[0]} />;
};

export default Detail;
