import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props){
    super(props);
    this.state={showText:true};

    setInterval(()=>{this.setState({showText:!this.state.showText})},1000);
  }

  render() {
    let display = this.state.showText?this.props.Text:'';
    return (
      <Text>{display}!</Text>
    );
  }
}

class MyProject extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Blink Text='Rexxar' />
        <Blink Text='Jaina' />
        <Blink Text='Valeera' />
      </View>
    );
  }
}



AppRegistry.registerComponent('MyProject', () => MyProject);
