import React from 'react';
import {
    Component
} from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image
} from 'react-native';

class BlankView extends React.Component {

     renderImage(imgURI,index) {
        return (
         <View key = {index}>
         <Text>{imgURI}</Text>
         <Image source={{uri: imgURI}} style={{width: 117, height: 40}} />
        </View>
        );
      }

    render() {
        var images = this.props.images;
        console.log('images:',images)
        return (
             <View
                style = { { width:1080, height:100 } }>
                <Text>BlankView :{this.props.section}</Text>
                <Text>BlankView :{this.props.name}</Text>
                {images.map((item,index) => this.renderImage(item,index))}
             </View>
        );
    }
}
module.exports = BlankView