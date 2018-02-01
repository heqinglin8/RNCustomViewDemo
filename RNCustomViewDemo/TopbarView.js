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
        title: PropTypes.string,
        righttext: PropTypes.string,
        onBack: PropTypes.func,
        ...View.propTypes
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NativeTopbarView
                title = {this.props.title}
                righttext = {this.props.righttext}
                style = { this.props.style }
                onBack = { this._onBack }
                >
            </NativeTopbarView>
        );
    }

    _onBack(){
             console.log('_onBack');
        }

}
module.exports = TopbarView
