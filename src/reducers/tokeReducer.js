import {
  GET_TOKES,
  GET_TOKES_SUCCESS,
  GET_TOKES_ERROR,
  ADD_TOKE,
  ADD_TOKE_SUCCESS,
  ADD_TOKE_ERROR,
  SET_TOKE,
  REMOVE_TOKE,
  EDIT_TOKE,
  EDIT_TOKE_SUCCESS,
  EDIT_TOKE_ERROR,
  DELETE_TOKE,
  DELETE_TOKE_SUCCESS,
  DELETE_TOKE_ERROR,
} from '../actions';

const initialState = {
  tokes: [],
  toke: {},
  isLoading: false,
  error: null,
};

export default function tokeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOKES:
    case ADD_TOKE:
    case EDIT_TOKE:
    case DELETE_TOKE:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TOKES_SUCCESS:
      return {
        ...state,
        tokes: action.payload,
        isLoading: false,
      };
    case ADD_TOKE_SUCCESS:
      return {
        ...state,
        tokes: [...state.tokes, action.payload],
        isLoading: false,
      };
    case EDIT_TOKE_SUCCESS:
      let updated = action.payload;
      let sorted = state.tokes
        .map((toke) => (toke.id === updated.id ? updated : toke))
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date));
      return {
        ...state,
        tokes: sorted,
        isLoading: false,
      };
    case DELETE_TOKE_SUCCESS:
      return {
        ...state,
        tokes: state.tokes.filter((toke) => toke.id !== action.payload),
        isLoading: false,
      };
    case GET_TOKES_ERROR:
    case ADD_TOKE_ERROR:
    case EDIT_TOKE_ERROR:
    case DELETE_TOKE_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case SET_TOKE:
      return {
        ...state,
        toke: action.payload,
      };
    case REMOVE_TOKE:
      return {
        ...state,
        toke: {},
      };
    default:
      return state;
  }
}
