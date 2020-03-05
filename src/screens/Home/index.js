import React, { useEffect, useState } from 'react';
import { Text, FlatList, View, Image } from 'react-native';

import api from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';

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
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item, index) => `list-item${index}`}
        renderItem={({ item }) => (
          <View>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: item.image,
              }}
            />
            <Text>{item.title}</Text>
            <Text>{item.priceFormatted}</Text>
          </View>
        )}
      />
    </View>
  );
}
