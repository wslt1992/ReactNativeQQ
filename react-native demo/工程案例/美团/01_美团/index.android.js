import React, { Component } from 'react';
import { AppRegistry,TouchableHighlight, TouchableNativeFeedback,ListView,ScrollView,StyleSheet,Text, View ,Image,TextInput} from 'react-native';

class MeiTuan extends Component {
  render() {
    return (
      <View style={{marginLeft:5,marginTop:10,marginRight:5}}>

        <View style={{flex: 1, marginTop:20,flexDirection: 'row'}}>
          
            <View style={{flex: 1, }}>
              <Image  style={styles.img} source={require('./img/one.png')}/>
              <Text style={styles.baseText}>美食</Text>
            </View>
            <View style={{flex: 1}}>
              <Image  style={styles.img} source={require('./img/two.png')}/>
              <Text style={styles.baseText}>电影</Text>
            </View>
            <View style={{flex: 1}}>
              <Image  style={styles.img} source={require('./img/three.png')}/>
              <Text style={styles.baseText}>酒店</Text>
            </View>
            <View style={{flex: 1}}>
              <Image  style={styles.img} source={require('./img/four.png')}/>
              <Text style={styles.baseText}>ktv</Text>
            </View>
            <View style={{flex: 1}}>
              <Image  style={styles.img} source={require('./img/five.png')}/>
              <Text style={styles.baseText}>外卖</Text>
            </View>
        </View>

        
        <View style={{flex: 1, marginTop:10,flexDirection: 'row'}}>
          <View style={{flex: 1, }}>
              <Image  style={styles.img} source={require('./img/six.png')}/>
              <Text style={styles.baseText}>美食</Text>
            </View>
            <View style={{flex: 1}}>
              <Image  style={styles.img} source={require('./img/seven.png')}/>
              <Text style={styles.baseText}>电影</Text>
            </View>
            <View style={{flex: 1}}>
              <Image  style={styles.img} source={require('./img/eight.png')}/>
              <Text style={styles.baseText}>酒店</Text>
            </View>
            <View style={{flex: 1}}>
              <Image  style={styles.img} source={require('./img/nine.png')}/>
              <Text style={styles.baseText}>ktv</Text>
            </View>
            <View style={{flex: 1}}>
              <Image  style={styles.img} source={require('./img/ten.png')}/>
              <Text style={styles.baseText}>外卖</Text>
            </View>
        </View>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  baseText: {
    alignSelf:'center',
    fontSize: 20,
  },
  img: {
    alignSelf:'center',
  }
  
});

AppRegistry.registerComponent('MyProject', () => MeiTuan);
