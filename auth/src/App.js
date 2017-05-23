import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBaPyJI6YiFQeCdkdlbxguH3UKrvCyWTEk',
      authDomain: 'auth-cb856.firebaseapp.com',
      databaseURL: 'https://auth-cb856.firebaseio.com',
      projectId: 'auth-cb856',
      storageBucket: 'auth-cb856.appspot.com',
      messagingSenderId: '146135341568'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
