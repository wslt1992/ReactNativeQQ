import React, { Component } from 'react';
import { AppRegistry,ListView,ScrollView,StyleSheet,Text, View ,Image,TextInput} from 'react-native';

class MyProject extends Component {

   constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !==r2});
    this.state={
      dataSource:ds.cloneWithRows(['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'])
    };
  }
  render() {
    return (
     <ListView 
      dataSource={this.state.dataSource}
      renderRow={(rowData)=>
        <View
          style={{padding:10,flex:1,flexDirection:'row',alignItems: 'center',justifyContent: 'space-around',}}
        >
        <Image source={require('./img/favicon.png')}/>
        <Text style={{flex:1,}}>{rowData}</Text>
        
        </View>}
     />
    );
  }
}


AppRegistry.registerComponent('MyProject', () => MyProject);
