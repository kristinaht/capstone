import * as c from './ActionTypes';

export const deleteTerm = id => ({
  type: c.DELETE_TERM,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})