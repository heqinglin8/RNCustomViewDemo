import React from 'react';
import {
    Component
} from 'react';
import {
    View,
    Text
} from 'react-native';

class DelayView extends React.Component {
    render() {
        return (
            <View
                style = { { width:1080, height:500 } }>
                <Text>
                    DelayView
                </Text>
                <Text>
                    何清林
                </Text>
            </View>
        );
    }
}
module.exports = DelayView