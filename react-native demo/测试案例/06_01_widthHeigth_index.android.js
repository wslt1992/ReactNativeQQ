import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text, View } from 'react-native';

class MyProject extends Component {
  render() {
    return (

      <View>
        <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
        <View style={{width:100,height:100,backgroundColor:'skyblue'}}/>
        <View style={{width:150,height:150,backgroundColor:'steelblue'}}/>
      </View>
    );
  }
}


AppRegistry.registerComponent('MyProject', () => MyProject);
