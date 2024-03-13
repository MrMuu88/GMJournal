
import 'react-native-gesture-handler'; //acording to documentation this is needed for the drawer navigation: https://reactnavigation.org/docs/drawer-navigator

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { JournalPage } from './src/Pages/JournalPage.js';
import { InDevelopment } from './src/Pages/InDevelopment.js';
import { CustomDrawer } from './src/Components/CustomDrawer.js';
import { MenuProvider } from 'react-native-popup-menu';
import { DatabaseHandlerPage } from './src/Pages/DataBaseHandler.js';

const App = () => {

  const Drawer = createDrawerNavigator();

  return (
    <MenuProvider>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => CustomDrawer({ ...props })}>
          <Drawer.Screen name="Journals" component={JournalPage} />
          <Drawer.Screen name="Monsters" component={InDevelopment} />
          <Drawer.Screen name="Spells" component={InDevelopment} />
          <Drawer.Screen name="Items" component={InDevelopment} />
          <Drawer.Screen name="DatabaseHandler" component={DatabaseHandlerPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
