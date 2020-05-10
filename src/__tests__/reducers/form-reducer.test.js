import formReducer from './../../reducers/form-reducer';
import * as c from './../../actions/ActionTypes';

describe('formReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(formReducer(undefined, { type: null})).toEqual(false);
  });

  test('Should toggle form visibility state to true', () => {
    expect(formReducer(undefined, { type: c.TOGGLE_FORM })).toEqual(true);
  })
})