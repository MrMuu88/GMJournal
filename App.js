
import 'react-native-gesture-handler'; //acording to documentation this is needed for the drawer navigation: https://reactnavigation.org/docs/drawer-navigator

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import Menu from './src/Components/Menu';

const App = () => {

  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
};

export default App;
