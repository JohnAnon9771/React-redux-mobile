import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      headerMode="float"
      screenOptions={{
        cardStyle: { backgroundColor: '#191920' },
        header: navigation => <Header {...navigation} />,
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
}
