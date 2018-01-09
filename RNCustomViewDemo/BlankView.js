import React from 'react';
import {
    Component
} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

class BlankView extends React.Component {

     renderImage(imgURI) {
        return (
         <View>
         <Text>{imgURI}</Text>
        </View>
        );
      }

    render() {
        console.log('images:',this.props.images)
        return (
             <View
                style = { { width:1080, height:800 } }>
                <Text>BlankView :{this.props.section}</Text>
                <Text>BlankView :{this.props.name}</Text>
                <Text>List :{this.props.images}</Text>
                 {this.props.images.map(this.renderImage)}
             </View>
        );
    }
}
module.exports = BlankView