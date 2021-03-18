import {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from "../actions/actionTypes";

const intialState = {
  loading: true,
  data: [],
  error: false,
};

export const initialFetchReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};
