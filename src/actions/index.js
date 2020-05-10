import * as c from './ActionTypes';

export const addTerm = (term) => {
  const { name, body, id } = term;
  return {
    type: c.ADD_TERM,
    name: name,
    body: body,
    id: id
  }
}

export const deleteTerm = id => ({
  type: c.DELETE_TERM,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})