import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
