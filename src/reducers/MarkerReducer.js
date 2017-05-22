import {
  UPDATE_MARKERS,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case UPDATE_MARKERS:
      return action.payload;
    default:
      return state;
  }
}
