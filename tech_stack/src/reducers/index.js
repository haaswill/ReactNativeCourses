import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Makes multiple reducers work together, assignin them to a key
// { libraries: [] }
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
