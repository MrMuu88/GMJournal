
import 'react-native-gesture-handler'; //acording to documentation this is needed for the drawer navigation: https://reactnavigation.org/docs/drawer-navigator

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { JournalPage } from './src/Pages/JournalPage.js';
import { InDevelopment } from './src/Pages/InDevelopment.js';

const App = () => {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Journals'>
        <Drawer.Screen name="Journals" component={JournalPage} />
        <Drawer.Screen name="Monsters" component={InDevelopment} />
        <Drawer.Screen name="Spells" component={InDevelopment} />
        <Drawer.Screen name="Items" component={InDevelopment} />
        <Drawer.Screen name="About us" component={InDevelopment} />
        <Drawer.Screen name="Settings" component={InDevelopment} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;