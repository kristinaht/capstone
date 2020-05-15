import formReducer from './form-reducer';
import termListReducer from './term-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisible : formReducer,
  masterTermList: termListReducer,
  firestore: firestoreReducer
})

export default rootReducer;