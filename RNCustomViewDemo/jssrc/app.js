'use strict'
import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import ReactNative,{
  AppRegistry,
} from 'react-native';

//ES6
import MainScreen from './MainScreen';
import SecondScreen from './SecondScreen';

import ListViewDemo from './HotSeriesListView';

import CarDetail from './CarDetail';

const Navigator = StackNavigator(
  {
    ListViewDemo: {screen: ListViewDemo},
    CarDetail: {screen: CarDetail},
    Main: {screen: MainScreen},
    Profile: {screen: SecondScreen},
  },
  {
      navigationOptions: {
          headerBackTitle: "hahaha",
          headerTintColor: '#333333',
      },
  },
);

  // 在root中使用Navigator
  class Root extends React.Component {
    constructor(props) {
      super(props)
    }
      render(){
          return (
             <Navigator />
          );
      }
    }

AppRegistry.registerComponent('ReactNativeDemo', ()=> Root);
