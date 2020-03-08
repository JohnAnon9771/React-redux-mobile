import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ScrollView } from 'react-native';

import { updateAmount, removeToCart } from '../../store/modules/cart/actions';

import {
  Container,
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

import { formatPrice } from '../../utils/formatPrice';

export default function Cart() {
  const { cart, total } = useSelector(state => {
    return {
      cart: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
      })),
      total: formatPrice(
        state.cart.reduce((total, item) => {
          return total + item.price * item.amount;
        }, 0)
      ),
    };
  });
  const dispatch = useDispatch();

  function increment(product) {
    dispatch(updateAmount(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(updateAmount(product.id, product.amount - 1));
  }
  return (
    <ScrollView>
      <Container>
        {cart.map(product => (
          <Product key={product.id}>
            <PhotoProduct source={{ uri: product.image }} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.priceFormatted}</ProductPrice>
            </ProductInfo>
            <Remove
              name="md-trash"
              size={20}
              color="#7159c1"
              onPress={() => dispatch(removeToCart(product.id))}
            />
            <AmountInfo>
              <Quantity>
                <Decrement
                  name="minuscircleo"
                  size={20}
                  color="#7159c1"
                  onPress={() => decrement(product)}
                />
                <Value value={`${product.amount}`} />
                <Increment
                  name="pluscircleo"
                  size={20}
                  color="#7159c1"
                  onPress={() => increment(product)}
                />
              </Quantity>
              <Amount>{product.subtotal}</Amount>
            </AmountInfo>
          </Product>
        ))}
        <ValueAmount>
          <ValueText>TOTAL</ValueText>
          <TotalPrice>{total}</TotalPrice>
        </ValueAmount>
        <Button>
          <ButtonText>FINALIZAR PEDIDO</ButtonText>
        </Button>
      </Container>
    </ScrollView>
  );
}
