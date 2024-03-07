
import 'react-native-gesture-handler'; //acording to documentation this is needed for the drawer navigation: https://reactnavigation.org/docs/drawer-navigator

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { FAB } from '@rneui/themed';
import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Page1, Page2 } from "./src/Pages/Pages.js";

const App = () => {

  const Drawer = createDrawerNavigator();
  const [fabsVisible, setFabsVisible] = useState(false);

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Page 1" component={Page1} />
        <Drawer.Screen name="Page 2" component={Page2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
