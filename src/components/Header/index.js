import React from 'react';

import { Cart, IconCart, Item, Container, Logo, Wrapper } from './styles';
import logo from '../../../assets/images/logo.png';

export default function Header({ navigation }) {
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
          <Item>3</Item>
        </Cart>
      </Container>
    </Wrapper>
  );
}
