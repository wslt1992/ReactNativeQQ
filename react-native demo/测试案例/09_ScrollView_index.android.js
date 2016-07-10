import React, { Component } from 'react';
import { AppRegistry,ScrollView,StyleSheet,Text, View ,Image,TextInput} from 'react-native';

class MyProject extends Component {

   constructor(props) {
    super(props);
    this.state={text:''};
  }
  render() {
    return (
     <ScrollView
      >
        <Text style={{fontSize:198}}>Scroll me  lt</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize:198}}>dell dell lled</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
      </ScrollView>
    );
  }
}


AppRegistry.registerComponent('MyProject', () => MyProject);
