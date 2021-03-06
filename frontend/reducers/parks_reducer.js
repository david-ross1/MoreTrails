import {
  RECEIVE_PARK,
  RECEIVE_PARK_TRAILS,
  RECEIVE_PARKS,
} from '../actions/park_actions';

const parksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PARK:
      return { ...state, [action.park.id]: action.park };
    case RECEIVE_PARKS:
      return { ...state, park_list: action.parks };
    case RECEIVE_PARK_TRAILS:
      return { ...state, parkTrails: action.parkTrails };
    default:
      return state;
  }
};

export default parksReducer;
