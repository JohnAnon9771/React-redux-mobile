import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';

import { addToCartRequest } from '../../store/modules/cart/actions';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  ProductList,
  Container,
  ProductImage,
  Button,
  ButtonIcon,
  ButtonText,
  ItemCart,
  ProductPrice,
  ProductTitle,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { amount } = useSelector(state => {
    return {
      amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
      }, {}),
    };
  });
  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }
    getProducts();
  }, []);
  return (
    <View>
      <ProductList
        horizontal
        data={products}
        keyExtractor={(item, index) => `list-item${index}`}
        renderItem={({ item }) => (
          <Container>
            <ProductImage
              source={{
                uri: item.image,
              }}
            />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <Button onPress={() => dispatch(addToCartRequest(item.id))}>
              <ButtonIcon>
                <Icon name="cart-plus" size={18} color="#fff" />
                <ItemCart>{amount[item.id] || 0}</ItemCart>
              </ButtonIcon>
              <ButtonText>ADICIONAR</ButtonText>
            </Button>
          </Container>
        )}
      />
    </View>
  );
}
