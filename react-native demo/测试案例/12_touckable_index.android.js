import React, { Component } from 'react';
import { AppRegistry,TouchableHighlight, TouchableNativeFeedback,ListView,ScrollView,StyleSheet,Text, View ,Image,TextInput} from 'react-native';

class MyButton extends Component {

_onPressButton(){
  console.log("You tapped the button!");
}

  render() {
    return (
      
      < TouchableHighlight style={{backgroundColor :"#aaa",}} activeOpacity={1} onPress={this._onPressButton}>

        <Text activeOpacity={1} style={{fontSize:50}}>Button</Text>
      </ TouchableHighlight>
      
    );
  }
}


AppRegistry.registerComponent('MyProject', () => MyButton);
