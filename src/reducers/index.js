import formReducer from './form-reducer';
import termListReducer from './term-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisible : formReducer,
  masterTermList: termListReducer
})

export default rootReducer;