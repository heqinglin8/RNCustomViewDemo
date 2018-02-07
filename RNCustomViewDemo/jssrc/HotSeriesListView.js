'use strict';
//Get请求
import React,{Component} from 'react';
var ReactNative = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} = ReactNative;

//POST请求
var API_KEY = '&time=1456826453&sign=3d8c184c2db4ac9a19d3ab2a5ae03703';
var REQUEST_URL = 'http://t.umapi.tuanche.com/basedata/hotstyle';
var count = 20;
var offset = 0;
var cityId = 10;
//跳转页面的引入
// var CarDetail = require('./CarDetail');

class ListViewDemo extends Component{

   //初始化
   constructor(props) {
    super(props);
    var lv = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    this.state = {
      dataSource:lv,
      loaded: false,  //是否加载到数据
  };
}

  //从网络获取数据
  componentDidMount(){
     this.getList(cityId,offset,count);
  }

   //get请求
  getList(cityId,offset,count){
    var PARAMS = '?cityId=' + cityId + '&offset=' + offset + '&count= ' + count;
    REQUEST_URL = REQUEST_URL + PARAMS + API_KEY;
    console.log("REQUEST_URL",REQUEST_URL);
     fetch(REQUEST_URL).
     then((response) => response.json())
     .then(responseData =>{
       console.log("responseData",responseData);
       this.setState({
         dataSource:this.state.dataSource.cloneWithRows(responseData.result),
         loaded: true,
         total:responseData.total,
       });
     }).done();
  }

  //post请求
  // getList:function(cityId,adpId,offset,count){
  //   // {"adpId":33,"count":20,"offset":0,"cityId":10}
  //    fetch(REQUEST_URL,{
  //      //post请求的设置
  //      method: 'POST',
  //      headers: {
  //        'Accept': 'application/json',
  //        'Content-Type': 'application/json',
  //      },
  //      body: JSON.stringify({
  //        //10,33,0,20
  //        cityId:cityId,
  //        adpId:adpId,
  //        offset:offset,
  //        count:count,
  //      }),
  //    }).
  //    then((response) => response.json())
  //    .then(responseData =>{
  //      console.log("responseData",responseData);
  //      this.setState({
  //        dataSource:this.state.dataSource.cloneWithRows(responseData.movies),
  //        loaded: true,
  //        total:responseData.total,
  //      });
  //    }).done();
  // },

   render(){
     if(!this.state.loaded){
       return this.renderLoading();
     }

     return (
      <View style = {styles.outCotainer}>
      <Text style={styles.title}>热门车型</Text>
        <View style={styles.separator} />
      <ListView
         dataSource = {this.state.dataSource}
         renderRow = {this._renderRow}
         style = {styles.listView}
      />
      </View>
     );
   }

renderLoading(){
  return(
    <Text> 正在加载数据... </Text>
  );
}

_renderRow(rowData,sectionID,rowID) {
    return (
      <TouchableHighlight underlayColor="rgba(34,28,32,0.5)" onPress={() => {this.pressRow.bind(rowID,rowData)}}>
  <View>
        <View style={styles.container} >
          <Image
            source={{uri: rowData.logo}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{rowData.brandName}</Text>
            <Text style={styles.content}>{rowData.pricePrefix}{rowData.price}{rowData.priceSuffix}</Text>
            <Text style={styles.year}>
            {rowData.prefix}
            <Text style={styles.manNum}>{rowData.manNum}</Text>
            {rowData.suffix}
            </Text>
          </View>
        </View>
      <View style={styles.separator} />
    </View>
      </TouchableHighlight>
    );
  }

  pressRow(rowID,carInfo) {
    console.log("点击一个Item：",carInfo.brandName);
    console.log("rowID",rowID);
    this.props.navigator.push({
      title: carInfo.styleName,
      // component: CarDetail,
      passProps: {data: carInfo}
    });
    alert('点击列表cell，进入详情页, rowID:'+rowID+', styleName:'+carInfo.styleName);
  }

}

//样式
var styles = StyleSheet.create({

  outCotainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  container: {
    // display:'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  rightContainer: {
    flex: 1,
    marginLeft:20,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
    color:'#000000',
  },
  content: {
    fontSize: 14,
    textAlign: 'left',
  },
  year: {
    textAlign: 'left',
    color:'#000000',
  },
  manNum: {
    textAlign: 'left',
    color:'#FF0000',
  },
  thumbnail: {
    width: 90,
    height: 60,
  },

  listView: {
    backgroundColor: '#F5FCFF',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});

AppRegistry.registerComponent('ReactNativeDemo',() => ListViewDemo);
