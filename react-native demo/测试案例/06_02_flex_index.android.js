import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text, View } from 'react-native';

class MyProject extends Component {
  render() {
    return (

      <View style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'powderblue'}}/>
        <View style={{flex:1,backgroundColor:'skyblue'}}/>
        <View style={{flex:2,backgroundColor:'steelblue'}}/>
      </View>
    );
  }
}


AppRegistry.registerComponent('MyProject', () => MyProject);
