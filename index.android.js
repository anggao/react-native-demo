/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';

import {
  AppRegistry
} from 'react-native';

import { store } from './src/store';
import { Main } from './src/Main';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

AppRegistry.registerComponent('ToDoList', () => App);
