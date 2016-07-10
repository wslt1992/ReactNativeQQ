import React, { Component } from 'react';
import { AppRegistry,DrawerLayoutAndroid,ToastAndroid,TouchableHighlight, TouchableOpacity,TouchableNativeFeedback,ListView,ScrollView,StyleSheet,Text, View ,Image,TextInput} from 'react-native';

class Toast extends Component {
  
  constructor(pros){
    super(pros)
    this.state={
        Text:'1234'
      }
  }
  render() {
    return (
      <View>  
        <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={()=>ToastAndroid.show('toast:获取state值：'+this.state.Text,ToastAndroid.LONG)}>
            <Text style={styles.buttonText}>点击</Text>
        </TouchableHighlight>
      </View>

      
    );
  }
}
const styles = StyleSheet.create({
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  }
});

AppRegistry.registerComponent('MyProject', () => Toast);
