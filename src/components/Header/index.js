import React from 'react';

import { Cart, IconCart, Item, Container, Logo } from './styles';
import logo from '../../../assets/images/logo.png';

export default function Header({ navigation }) {
  return (
    <Container>
      <Logo source={logo} />
      <Cart>
        <IconCart
          name="shoppingcart"
          size={32}
          onPress={() => navigation.navigate('cart')}
        />
        <Item>3</Item>
      </Cart>
    </Container>
  );
}
