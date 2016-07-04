import { combineReducers } from 'redux';

const user = (state={}) => {
  return state;
}

const todos = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        action.payload,
        ...state
      ]
    default:
      return state;
  }
}

export const reducers = combineReducers({
  todos,
  user
});
