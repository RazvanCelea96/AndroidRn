import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen'


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: 'Search', 
    defaultNavigationOptions: {
      title: 'Food Search',
    },
  },
);

export default createAppContainer(navigator);
