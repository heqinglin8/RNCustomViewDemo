/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React,{Component} from 'react';
import ReactNative, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  Image,
} from 'react-native';

class CarDetail extends Component {

  static navigationOptions = {
    title: '车系详情',
  };

   constructor(props) {
        super(props);
        var data = this.props.navigation.state.params.data;
        console.log("data:",data);
        this.state = {
            id: 2,
            data:data
        };
    }

    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id,{rowData.seriesname}
        // this.setState({
        //     rowData: this.props.navigation.state.params.data
        // });
    }
  render() {
    var rowData = this.state.data;
    return (
      <View style={styles.container}>
       <Image source={{uri: rowData.logo}} style = {styles.bigImage} />
        <Text style={styles.welcome}>
          {rowData.seriesname}
        </Text>
        <Text style={styles.instructions}>
          {rowData.styleName}
        </Text>
        <Text style={styles.instructions}>
        {rowData.price}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigImage:{
    justifyContent: 'center',
    width: 300, 
    height: 200,
  },
});

module.exports=CarDetail;