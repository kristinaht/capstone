import termListReducer from './../../reducers/term-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('termListReducer', () => {
  let action;

  const currentState = {
    1: {
      name: 'Governing Law',
      body: 'test governing law provision',
      id: 1
    },
    2: {
      name: 'Insurance',
      body: 'test insurance provision',
      id: 2
    }
  }

  const termData = {
    name: 'Governing Law',
    body: 'test governing law provision',
    id: 1
  }

  test('Should return default state if no action type is recognized', () => {
    expect(termListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new term data to masterTermList', () => {
    const { name, body, id } = termData;
    action = { 
      type: c.ADD_TERM,
      name: name,
      body: body,
      id: id
    };
    expect(termListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        body: body,
        id: id
      }
    });
  });
  test('Should successfully delete a term from masterTermList', () => {
    action = {
      type: c.DELETE_TERM,
      id: 1
    }
    expect(termListReducer(currentState, action)).toEqual({
      2: {
        name: 'Insurance',
        body: 'test insurance provision',
        id: 2
      }
    });
  });

})
