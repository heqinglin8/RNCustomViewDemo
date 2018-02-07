import React from 'react';
import {
    View,
    Button
} from 'react-native';

class SecondScreen extends React.Component {
    static navigationOptions = {
      title: 'SecondScreen',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() =>{
              navigate('Profile', { name: 'Jane' });
            }}
        />
      );
    }
  }

  module.exports=SecondScreen;