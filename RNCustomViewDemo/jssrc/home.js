'use strict';

import React,{Component} from 'react';
var ReactNative = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
} = ReactNative;

var IntentAndroid = require('./utils/IntentAndroid');

 var navigator;
 var navigation;
class Home extends React.Component{
   
   static navigationOptions = {
    title:"首页"
   }

   render(){
    navigation = this.props.navigation;

     return (
      <View style = {styles.cotainer}>
              <View style = {[styles.item,styles.center]}>
              <Text style = {styles.font} onPress = {this.goTo.bind(this,1)}>热门车系</Text>
              </View>

              <View style = {[styles.item,styles.lineLeftRight]}>
                  <View style = {[styles.flex,styles.center,styles.lineCenter]}>
                  <Text style = {styles.font} onPress = {this.goTo.bind(this,2)}>RNCustomViewDemo</Text>
                  </View>
                  <View style = {[styles.flex,styles.center]}>
                  <Text style = {styles.font} onPress = {this.goTo.bind(this,3)}>吊起activity</Text>
                  </View>
              </View>

              <View style = {styles.item}>
                  <View style = {[styles.flex,styles.center,styles.lineCenter]}>
                  <Text style = {styles.font}>团购</Text>
                  </View>
                  <View style = {[styles.flex,styles.center]}>
                  <Text style = {styles.font}>客栈公寓</Text>
                  </View>
              </View>
      </View>
     );
   }

   goTo(index){
        //这是以前通过字符串来判断动作，下面用switch代替
       console.log('index',index);
       if(navigation){
         switch(index){
             case 1:
             navigation.navigate('ListViewDemo',{title: '热门车系'});
                 break;
             case 2:
             navigation.navigate('RNCustomViewDemo',{title: 'RNCustomViewDemo'});
                 break;
             case 3:
                 // IntentUtil.intentTo();
                 //  IntentUtil.OpentActivityByUrl("autohome://splashActivity");
                 IntentAndroid.openURL("autohomeinside://findcar");
                 break;
         }

     }
   }

}

//样式
var styles = StyleSheet.create({
   //第一行布局
  cotainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height:84,
    backgroundColor:'#ff0067',
    borderRadius:10,
    padding:2,
    marginTop:25,
    marginLeft:5,
    marginRight:5,
  },

  item: {
    flex:1,
    height:80,
  },

  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  flex:{
    flex:1,
  },
  lineLeftRight:{
   borderColor:'#fff',
  //  borderLeftWidth:1/PixelRatio.get(),
  //  borderRightWidth:1/PixelRatio.get(),
   borderLeftWidth:1,
   borderRightWidth:1,
  },
  lineCenter:{
    borderColor:'#fff',
    // borderBottomWidth:1/PixelRatio.get(),
    borderBottomWidth:1,
  },
  font:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
  }

});

module.exports = Home;
