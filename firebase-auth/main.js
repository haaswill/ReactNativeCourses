import Expo from 'expo';
import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

class App extends React.Component {
  componentDidMound() {
    const config = {
      apiKey: 'AIzaSyD0r6nA-6DBk55K7lmGN_llOLK26I8d9OA',
      authDomain: 'one-time-password-d704a.firebaseapp.com',
      databaseURL: 'https://one-time-password-d704a.firebaseio.com',
      projectId: 'one-time-password-d704a',
      storageBucket: 'one-time-password-d704a.appspot.com',
      messagingSenderId: '52937972996'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
