'use strict';

var React = require('react-native');
var {
   PixelRatio,
} = React;
var Dimensions = require('Dimensions');
var Utli = {
  pixel:1/PixelRatio.get(),
  dp:PixelRatio.get(),
  window:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },

};

module.exports = Utli;
