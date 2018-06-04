import React from 'react';
import {DrawerNavigator, StackNavigator} from 'react-navigation';

import Home from '../screens/Home';
import Cities from '../screens/Cities';
import Dist from '../screens/Dist';
import Places from '../screens/Places';
import DescScreen from '../screens/DescScreen';

const CitiesStack = StackNavigator({
  Cities: {
    screen: Cities,
    navigationOptions: {
      headerTitle: 'Cities',
    },
  },
  DescScreen: {
    screen: DescScreen,
  },
});

const PlacesStack = StackNavigator({
  Places: {
    screen: Places,
    navigationOptions: {
      headerTitle: 'Places of Interest',
    },
  },
  DescScreen: {
    screen: DescScreen,
  },
});

const DistStack = StackNavigator({
  Dist: {
    screen: Dist,
    navigationOptions: {
      headerTitle: 'Districts',
    },
  },
  DescScreen: {
    screen: DescScreen,
  },
});

export default DrawerNavigator({
    Home: {
      screen: Home,
    },
    Cities: {
      screen: CitiesStack,

    },
    Districts: {
      screen: DistStack,
    },
    Places: {
      screen: PlacesStack,
    },
});
