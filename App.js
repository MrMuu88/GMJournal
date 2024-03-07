
import 'react-native-gesture-handler'; //acording to documentation this is needed for the drawer navigation: https://reactnavigation.org/docs/drawer-navigator

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { JournalPage } from './src/Pages/JournalPage.js';
import { InDevelopment } from './src/Pages/InDevelopment.js';
import { View, Text } from 'react-native';


const CustomDrawer = (props) => {

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'white', backgroundColor: 'red', padding: 20 }}>GM Journal</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList  {...props} />
      </DrawerContentScrollView>
      <View style={{ borderTopWidth: 1 }} >
        <DrawerItem {...props} label="About" component={InDevelopment} />
        <DrawerItem {...props} label="Settings" component={InDevelopment} />
      </View>
    </View>
  );
};

const App = () => {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Journals" component={JournalPage} />
        <Drawer.Screen name="Monsters" component={InDevelopment} />
        <Drawer.Screen name="Spells" component={InDevelopment} />
        <Drawer.Screen name="Items" component={InDevelopment} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
