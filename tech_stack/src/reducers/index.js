import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

// Makes multiple reducers work together, assignin them to a key
// { libraries: [] }
export default combineReducers({
  libraries: LibraryReducer
});
