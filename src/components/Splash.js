import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

class Splash extends Component{
  login = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        Actions.main({type: 'reset'});
      }else{
        Actions.auth({type: 'reset'});
      }
    })
  }

  render(){
    return(
      <View>
        {this.login()}
      </View>
    )
  }
}

export default Splash;
