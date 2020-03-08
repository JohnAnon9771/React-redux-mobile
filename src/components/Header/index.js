import React from 'react';
import { useSelector } from 'react-redux';

import { Cart, IconCart, Item, Container, Logo, Wrapper } from './styles';
import logo from '../../../assets/images/logo.png';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Wrapper>
      <Container>
        <Logo source={logo} />
        <Cart>
          <IconCart
            name="shoppingcart"
            size={28}
            onPress={() => navigation.navigate('cart')}
          />
          <Item>{cartSize}</Item>
        </Cart>
      </Container>
    </Wrapper>
  );
}
