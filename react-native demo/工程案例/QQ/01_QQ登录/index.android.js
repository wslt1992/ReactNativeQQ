import React, { Component } from 'react';
import { AppRegistry,TouchableHighlight, TouchableOpacity,TouchableNativeFeedback,ListView,ScrollView,StyleSheet,Text, View ,Image,TextInput} from 'react-native';

class QQ extends Component {
  render() {
    return (
      <View style={{flex: 1,marginLeft:5,marginTop:30,marginRight:5}}>
          {/* 头像 */}
          <Image source={require('./img/qq.png')} style={styles.qq}/>

          {/**账号、密码、登录 */}
          <View style={{marginLeft:42,marginRight:42,marginTop:80}} >

              {/* 账号 */}
              <View flexDirection='row'>
                  <Text style={styles.text}>号码：</Text>
                  <TextInput autoFocus={true} placeholder ='QQ号码、QQ邮箱'style={[styles.text ,styles.matchParent]}/>
              </View>
              {/* 密码 */}
              <View flexDirection='row'>
                  <Text style={styles.text}>密码：</Text>
                  <TextInput placeholder ='QQ密码' secureTextEntry={true} style={[styles.text ,styles.matchParent,]}/>
              </View>
              {/* 登录 */}
               

              <TouchableOpacity activeOpacity={0.7} style={{marginTop:80}}>
                   <View style={styles.login}>
                          <Text style={[styles.text,{color:'#fff',fontSize:30,}]}>登录</Text>
                    </View>
              </TouchableOpacity>
              
          </View>

          {/**注册、忘记密码 */}
          <View  style={{flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginLeft:12,marginRight:12,bottom:10}}>
               {/**注册 */}
               <Text style={[{color:'#63B8FF',fontSize:20,}]}>新用户</Text>
               <Text style={[{color:'#63B8FF',fontSize:20,}]}>忘记密码</Text>
          </View>

      </View>
    );
  }
}

var styles = StyleSheet.create({

  matchParent:{
    flex:1
  }
  ,
  qq: {
    alignSelf:'center',
    width:130,
    height:130,
    borderRadius:75,
    marginTop:30,
    
  },
  text:{
    alignSelf:'center',
    fontSize:24,
    
  },
  login:{
    backgroundColor:'#63B8FF',
    padding:10,
    borderRadius:800,
  },
  img: {
    alignSelf:'center',
  }
  
});

AppRegistry.registerComponent('MyProject', () => QQ);
