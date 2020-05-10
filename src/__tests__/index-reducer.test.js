import rootReducer from './../reducers/index';
import formReducer from './../reducers/form-reducer';
import termListReducer from './../reducers/term-list-reducer';
import { createStore } from 'redux';
import * as c from './../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      formVisible: false,
      masterTermList: {}
    });
  });

  test('Check that initial state of formReducer matches rootReducer', () => {
    expect(store.getState().formVisible).toEqual(formReducer(undefined, { type: null }));
  });

  test('Check that initial state of termListReducer matches rootReducer', () => {
    expect(store.getState().masterTermList).toEqual(termListReducer(undefined, { type: null}));
  });

  test('Check taht initial state of termListReducer matches rootReducer', () => {
    const action = {
      type: c.ADD_TERM,
      name:'Governing Law',
      body: 'Example governing law provision',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterTermList).toEqual(termListReducer(undefined, action));
  });

  test('Check that initial state of formReducer matches rootReducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisible).toEqual(formReducer(undefined, action));
  });
})