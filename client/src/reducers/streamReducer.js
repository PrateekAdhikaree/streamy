import _ from 'lodash';

import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM || CREATE_STREAM || EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    // case CREATE_STREAM:
    //   return { ...state, [action.payload.id]: action.payload };

    // case EDIT_STREAM:
    //   return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      return _.omit(state, action.payload);

    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };

    default:
      return state;
  }
};
