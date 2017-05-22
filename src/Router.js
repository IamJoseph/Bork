//define all the different scenes a user can visit in app
import React, {Component} from 'react';
import {Scene, Router, Actions, ActionConst} from 'react-native-router-flux';
import * as firebase from 'firebase';
import LoginForm from './components/LoginForm';
import MarkerForm from './components/MarkerForm';
import Maps from './components/Maps';
import FormSelection from './components/FormSelection';
import CameraComponent from './components/CameraComponent';
import Splash from './components/Splash';

class RouterComponent extends Component{
  render(){
    return(
      <Router sceneStyle = {{paddingTop: 65}}>
        <Scene key = 'splash' component = {Splash} hideNavBar />
        <Scene key = 'auth'>
          <Scene key = 'login' component = {LoginForm} title = 'Please Login'/>
        </Scene>
        <Scene key = 'main' type={ActionConst.RESET}>
          <Scene key = 'maps' component = {Maps} hideNavBar />
        </Scene>
        <Scene
          key = "forms"
          type={ActionConst.RESET}
          onLeft={() => Actions.main()}
          leftButtonImage = {require('./assets/back_icon.png')}
          leftButtonIconStyle = {{height: 30, width: 30, alignSelf: 'flex-start'}}
        >
          <Scene
            key = 'formSelection'
            component = {FormSelection}
            hideNavBar = {false}
            title = 'Please Select'
            navigationBarStyle = {{backgroundColor: '#345e81'}}
            titleStyle = {{color: '#fffef6'}}
            leftButtonTextStyle = {{color: '#67b0d5'}}
          />
          <Scene
            key = 'markerForm'
            component = {MarkerForm}
            navigationBarStyle = {{backgroundColor: '#345e81'}}
            titleStyle = {{color: '#fffef6'}}
            backButtonImage = {require('./assets/back_icon.png')}
            onLeft = {Actions.pop}
            leftButtonIconStyle = {{height: 30, width: 30, alignSelf: 'center', marginTop: -4}}
          />
          <Scene key = 'camera'
            component = {CameraComponent}
            navigationBarStyle = {{backgroundColor: '#345e81'}}
            titleStyle = {{color: '#fffef6'}}
            backButtonImage = {require('./assets/back_icon.png')}
            onLeft = {Actions.pop}
            leftButtonIconStyle = {{height: 30, width: 30, alignSelf: 'center', marginTop: -4}}
          />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
