/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Button,
} from 'react-native';

import {HomeScreen} from './components/HomeScreen';
import {AboutScreen} from './components/About';

import {MyPlaces} from './components/MyPlaces';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Details} from './components/Details';

const NavComponent = createDrawerNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <NavComponent.Navigator>
          <NavComponent.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home'}}
          />

          <NavComponent.Screen name="About" component={AboutScreen} />

          <NavComponent.Screen name="My Places" component={MyPlaces}  />

          <NavComponent.Screen name="Details" component={Details} />
        </NavComponent.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
