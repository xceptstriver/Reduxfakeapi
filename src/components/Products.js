import React, {useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setProducts} from '../components/redux/actions/ProductActions';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import axios from 'axios';

const Products = () => {
  const state_list = useSelector(state => state.productsreducer.products);
  const dispatch = useDispatch();
  console.log('getState', state_list);

  const fetchproducts = async () => {
    const response = await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .catch(err => {
        console.log('Error', err);
      });

    dispatch(setProducts(response.data));
  };

  const renderItem = ({item}) => {
    return (
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note>{item.id}</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  };

  const myKeyExtractor = item => {
    return item.id;
  };

  useEffect(() => {
    fetchproducts();
  }, []);
  return (
    <FlatList
      data={state_list}
      renderItem={renderItem}
      keyExtractor={myKeyExtractor}
    />
  );
};

export default Products;
