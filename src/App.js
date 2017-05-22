import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import * as firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

//2nd argument for any initial state to pass to redux app
//3rd argument for store enhancers / additional functionality
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component{
  constructor(props){
    super(props);
    // Config values provided by firebase. You'll need to setup you own ;)
    const config = {
      apiKey: "xxxx",
      authDomain: "xxxx",
      databaseURL: "xxxx",
      storageBucket: "xxxx",
      messagingSenderId: "xxxx"
    };
    if(firebase.apps.length === 0){
      firebase.initializeApp(config);
    }
  }
  render(){
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
