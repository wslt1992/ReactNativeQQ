import React ,{Component} from 'react';
import { AppRegistry,ToastAndroid,TouchableHighlight,Navigator, TouchableOpacity,TouchableNativeFeedback,ListView,ScrollView,StyleSheet,Text, View ,Image,TextInput} from 'react-native';
import NewsView from './js/08_TextInput_index.android';
class QQMain extends Component{
    render(){
      return(
        <Text style={styles.text}>进入Main</Text>
      )
    }
}


class QQLogin extends Component {
  
   constructor(props) {
    super(props);
    this.state = {username: '',password: ''};
  }

  render() {
    return (   
      <View style={{flex: 1,marginLeft:5,marginTop:30,marginRight:5}}>
        <Text style={styles.text}>我的QQ</Text>
          {/* 头像 */}
          <Image source={require('./img/qq.png')} style={styles.qq}/>

          {/**账号、密码、登录 */}
          <View style={{marginLeft:42,marginRight:42,marginTop:80}} >

              {/* 账号 */}
              <View flexDirection='row'>
                  <Text style={styles.text}>号码：</Text>
                  <TextInput 
                      autoFocus={true} 
                      placeholder ='QQ号码、QQ邮箱'
                      style={[styles.text ,styles.matchParent]} 
                      onChangeText={(text)=>this.setState({username:text})}
                      />
              </View>

              {/* ------------------------密码---------------------------- */}
              <View flexDirection='row'>
                  <Text style={styles.text}>密码：</Text>
                  <TextInput placeholder ='QQ密码' secureTextEntry={true} style={[styles.text ,styles.matchParent,]}
                      onChangeText={(text)=>this.setState({password:text})}
                  />
              </View>

              {/* ---------------------登录 ------------------------------*/}
              <TouchableOpacity 
                  activeOpacity={0.7} 
                  style={{marginTop:80}} 
                  onPress={()=>{
                   

                     {/*1 登录成功 ------------------------------*/}
                    if(this.state.username==='ytw' && this.state.password==='ytw'){
                      ToastAndroid.show('登录成功',ToastAndroid.LONG)
                        this.props.navigator.push({
                          title:'NewsView',
                            message: '3',

                            navigator:this.props.navigator,
                            sceneConfig: Navigator.SceneConfigs.FloatFromRight,
                        })
                    }else{
                      {/*2 登录失败 ------------------------------*/}
                      ToastAndroid.show('账号：'+this.state.username+'密码:'+this.state.password+',账号密码错误\n请输入\'ytw\'进行登录',ToastAndroid.LONG)
                    }
                }
              }>
                   <View style={styles.login}>
                          <Text style={[styles.text,{color:'#fff',fontSize:30,}]}>登录</Text>
                    </View>
              </TouchableOpacity>

          </View>

          {/**注册、忘记密码 */}
          <View  style={{flex: 1,
            flexDirection:'row',
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

class QQLaunch extends Component{

  constructor(props){
    super(props)

  }
    render(){
      
      return( 

       <Navigator 
          initialRoute={{message:'1'}}
          renderScene={(route,navigator)=>
              {
                 if(route.message === '1'){
                  return (
                    <QQLogin navigator={navigator} route={route}/>
                    );
                  }
                  if(route.message === '2'){
                  return (
                    <QQMain navigator={navigator} route={route}/>
                    );
                  }else
                  return (
                    <NewsView navigator={navigator} route={route}/>
                    );
                  
               }
              
          }
        />

        )
      
           
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

AppRegistry.registerComponent('MyProject', () => QQLaunch);
