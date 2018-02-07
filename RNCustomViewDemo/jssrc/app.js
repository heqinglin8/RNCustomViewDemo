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
const Navigator = StackNavigator(
  {
    Main: {screen: MainScreen},
    Profile: {screen: SecondScreen},
  },
  {
      navigationOptions: {
          headerBackTitle: null,
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
