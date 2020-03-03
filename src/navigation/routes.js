import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={} />
      <Stack.Screen name="cart" component={} />
    </Stack.Navigator>
  );
}
