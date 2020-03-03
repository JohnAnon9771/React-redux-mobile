import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import api from '../../services/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');
      setProducts(response);
    }
    getProducts();
  }, []);

  return (
    <View>
      {products.map(product => (
        <Text>{product.title}</Text>
      ))}
    </View>
  );
}
