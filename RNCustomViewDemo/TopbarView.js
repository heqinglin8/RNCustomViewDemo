import React from 'react';
import {
    Component
} from 'react';
import {
    PropTypes
} from 'prop-types';
import {
    requireNativeComponent,
    View,
    UIManager,
    findNodeHandle
} from 'react-native';

var NativeTopbarView = requireNativeComponent('TopbarView', null);
class TopbarView extends React.Component {
    static propTypes = {
        ...View.propTypes
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NativeTopbarView
                style = { this.props.style }>
            </NativeTopbarView>
        );
    }
}
module.exports = TopbarView
