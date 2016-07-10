import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text, View ,TextInput} from 'react-native';

class MyProject extends Component {

   constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42,height: 240}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join('w')}
        </Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('MyProject', () => MyProject);
