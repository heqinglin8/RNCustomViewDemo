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
        onRight: PropTypes.func,
        ...View.propTypes
    }

    constructor(props) {
        super(props);
        this._onBack = this._onBack.bind(this);
        this._onRight = this._onRight.bind(this);
    }

    render() {
        return (
            <NativeTopbarView
                title = {this.props.title}
                righttext = {this.props.righttext}
                style = { this.props.style }
                onBack = { this._onBack }
                onRight = { this._onRight }
                >
            </NativeTopbarView>
        );
    }

    _onBack(event: Event){
             console.log('_onBack',this.props.onBack);

              if (!this.props.onBack) {
                         return;
                     }

                     this.props.onBack();
        }

    _onRight(event: Event){
                console.log('_onRight');
                  if (!this.props.onRight) {
                             return;
                         }

                         this.props.onRight(event.nativeEvent.text);
            }

}
module.exports = TopbarView
