import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDfIMZ-nn1exfG3PrN6piqcx9CUEabGAYc',
      authDomain: 'manager-b525b.firebaseapp.com',
      databaseURL: 'https://manager-b525b.firebaseio.com',
      projectId: 'manager-b525b',
      storageBucket: 'manager-b525b.appspot.com',
      messagingSenderId: '1058592699766'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
