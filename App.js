import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import './src/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './src/store/index';

import Routes from './src/navigation/routes';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
