import React, { Component } from 'react';
import { AppRegistry,ListView,ScrollView,StyleSheet,Text, View ,Image,TextInput} from 'react-native';

class MyProject extends Component {

   constructor(props) {
    super(props);
    this.getMoviesFromApiAsync = this.getMoviesFromApiAsync.bind(this); 
    this.state={
      text:null
    };
  }

   getMoviesFromApiAsync() {
    return fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          text:responseJson.movies
        })
        
      })
      .catch((error) => {
        console.error(error);
      }).done();
  }
 componentDidMount() {
    this.getMoviesFromApiAsync();
  }
  render() {
    if (!this.state.text) {
      return <Text style={{fontSize:96}}>
        loading</Text>;
    }
    var movie = this.state.text[0];
    return (
      <View>
        <Text style={{fontSize:96}}>
          {movie.title}
        </Text>
        <Text style={{fontSize:96}}>
          {movie.releaseYear}
        </Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('MyProject', () => MyProject);
