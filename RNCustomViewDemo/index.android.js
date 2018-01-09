import React from 'react';
import {
  View,
  AppRegistry,
  Button
} from 'react-native';

import DemoView from './DemoView.js';

import BlankView from './BlankView.js'
AppRegistry.registerComponent('BlankView', () => BlankView);

import DelayView from './DelayView.js'
AppRegistry.registerComponent('DelayView', () => DelayView);

class DemoViewDemo extends React.Component {
  render() {
    return (
      <View>
        <DemoView
            ref = { 'mDemoView' }
            style = { { width:1080, height:300 } }
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
      </View>
    );
  }
}
AppRegistry.registerComponent('ReactNativeDemo', () => DemoViewDemo);