import React from 'react';
import {
  View,
  AppRegistry,
  Button,
  PixelRatio,
  Dimensions
} from 'react-native';

import DemoView from './DemoView.js';

import TopbarView from './TopbarView.js';

import BlankView from './BlankView.js'
AppRegistry.registerComponent('BlankView', () => BlankView);

import DelayView from './DelayView.js'
AppRegistry.registerComponent('DelayView', () => DelayView);

var Util = require('./utils/Util');

class DemoViewDemo extends React.Component {
  render() {
    console.log("Topbar height:",PixelRatio.getPixelSizeForLayoutSize(50),"PixelRatio:",PixelRatio.get(),"width:",Util.window.width,"height:",Util.window.height);
    return (

      <View>
        <DemoView
            ref = { 'mDemoView' }
            style = { { width:Util.window.width, height:300 } }
            title = { 'DEMO' }
            alpha = { 0.5 }
            onTextColorChange = { (color) => {
                console.log('text color:' + color);
            }}/>
        <Button
            title = { '改变字体颜色' }
            onPress = { () => {
                this.refs.mDemoView.changeTextColor(-48060);
            }}>
        </Button>
        <Button
            title = { '动态添加控件' }
            onPress = { () => {
                this.refs.mDemoView.addView();
            }}>
        </Button>
         <TopbarView
            ref = { 'mTopbarView' }
            title = {'标题'}
            righttext = {'右按钮'}
            style = { { width:Util.window.width, height:50 } }
            />

      </View>
    );
  }
}
AppRegistry.registerComponent('ReactNativeDemo', () => DemoViewDemo);