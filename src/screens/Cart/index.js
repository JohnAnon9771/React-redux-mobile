import React from 'react';

import {
  Container,
  List,
  Product,
  PhotoProduct,
  ProductTitle,
  ProductPrice,
  ProductInfo,
  Amount,
  AmountInfo,
  Value,
  Increment,
  Decrement,
  Quantity,
  Remove,
  ValueAmount,
  ValueText,
  TotalPrice,
  Button,
  ButtonText,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <List
        data={[
          {
            id: 1,
            title: 'Tenis de caminhada leve confortável',
            price: 'R$182,89',
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          },
          {
            id: 2,
            title: 'Tenis de caminhada leve confortável',
            price: 'R$182,89',
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          },
        ]}
        keyExtractor={(item, index) => `list-item${index}`}
        renderItem={({ item }) => (
          <Product>
            <PhotoProduct source={{ uri: item.image }} />
            <ProductInfo>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price}</ProductPrice>
            </ProductInfo>
            <Remove name="md-trash" size={20} color="#7159c1" />
            <AmountInfo>
              <Quantity>
                <Decrement name="minuscircleo" size={20} color="#7159c1" />
                <Value value="3" />
                <Increment name="pluscircleo" size={20} color="#7159c1" />
              </Quantity>
              <Amount>{item.price}</Amount>
            </AmountInfo>
          </Product>
        )}
      />
      <ValueAmount>
        <ValueText>TOTAL</ValueText>
        <TotalPrice>R$1920,90</TotalPrice>
      </ValueAmount>
      <Button>
        <ButtonText>FINALIZAR PEDIDO</ButtonText>
      </Button>
    </Container>
  );
}
