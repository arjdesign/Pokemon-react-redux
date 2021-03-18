import {
  FETCH_INIT_RANDOM,
  FETCH_FAILURE,
  FETCH_RANDOM_SUCCESS,
} from "../actions/actionTypes";

const intialState = {
  loading: false,
  data: [],
  error: false,
};

export const randomFetchReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_INIT_RANDOM: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case FETCH_RANDOM_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };
    }

    case FETCH_FAILURE: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    default:
      return state;
  }
};
