import * as c from './../actions/ActionTypes';

export default (state={}, action) => {
  const { name, body, id } = action;
  switch(action.type) {
    case c.ADD_TERM:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          body: body,
          id: id
        }
      });
    case c.DELETE_TERM:
      const newState = { ...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
}