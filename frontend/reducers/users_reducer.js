import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_USER
 } from '../actions/user_actions';
import { merge } from 'lodash';

export default function(state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: {
      const newState = Object.assign({}, state);
      return merge({}, newState, { [action.user.id]: action.user });
    }
    case RECEIVE_USER:
      const newState = Object.assign({}, state);
      return merge({}, newState, { [action.user.id]: action.user });
    default: {
      return state;
    }
  }
}
