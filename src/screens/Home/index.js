import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import api from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';

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
            <Button>
              <ButtonIcon>
                <Icon name="cart-plus" size={18} color="#fff" />
                <ItemCart>3</ItemCart>
              </ButtonIcon>
              <ButtonText>ADICIONAR</ButtonText>
            </Button>
          </Container>
        )}
      />
    </View>
  );
}
