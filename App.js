import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import './src/config/ReactotronConfig';

import Routes from './src/navigation/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
