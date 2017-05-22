import {
  MENU_OPEN,
  SAVE_PICTURE,
  IMAGE_SOURCE,
  MARKER_IMAGE,
} from '../actions/types';

const INITIAL_STATE = {
  picture: '',
  src: '',
  markerImage: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case MENU_OPEN:
      return {...state, email: action.payload};
    case SAVE_PICTURE:
      return {...state, picture: action.payload};
    case IMAGE_SOURCE:
      return {...state, src: action.payload};
    case MARKER_IMAGE:
      return {...state, markerImage: action.payload};
    default:
      return state;
  }
};
