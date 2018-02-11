'use strict'
import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import ReactNative,{
  AppRegistry,
} from 'react-native';

//ES6
import ListViewDemo from './HotSeriesListView';

import RNCustomViewDemo from './RNCustomViewDemo';

import CarDetail from './CarDetail';

import Home from './home';

const Navigator = StackNavigator(
  {
    Home: {screen: Home},
    CarDetail: {screen: CarDetail},
    RNCustomViewDemo: {screen: RNCustomViewDemo},
    CarDetail: {screen: CarDetail}
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
