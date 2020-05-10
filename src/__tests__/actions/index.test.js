import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('term actions', () => {
  it('addTerm should create ADD_TERM action', () => {
    expect(actions.addTerm({name: 'Governing Law', body: 'Example governing law language', id: 1})).toEqual({
      type: c.ADD_TERM,
      name: 'Governing Law',
      body: 'Example governing law language',
      id: 1
    });
  })

  it('deleteTerm should create DELETE_TERM action', () => {
    expect(actions.deleteTerm(1)).toEqual({
      type: c.DELETE_TERM,
      id: 1
    });
  });
})