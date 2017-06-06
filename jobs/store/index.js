import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

// WHEN SOME STATE TYPE IS CHANGED, REDUX-PERSIST WILL CRASH THE APP TRYING TO 
// PERSIST THE OLD TYPE OF STATE USE MIGRATIONS FROM redux-persist-migrate EVERYTIME THE APP STARTS

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    // store enhancer
    autoRehydrate()
  )
);

// when state changes, call this function
// the one key we care is likedJobs
// adding .purge, will delete all data already saved
persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] });

export default store;
