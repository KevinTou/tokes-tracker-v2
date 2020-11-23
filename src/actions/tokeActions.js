import { axiosWithAuth } from '../utils/axiosWithAuth';
import { logout } from '../actions';

export const GET_TOKES = 'GET_TOKES';
export const GET_TOKES_SUCCESS = 'GET_TOKES_SUCCESS';
export const GET_TOKES_ERROR = 'GET_TOKES_ERROR';

export const getTokes = (user_id, history) => async (dispatch) => {
  dispatch({ type: GET_TOKES });

  try {
    let { data } = await axiosWithAuth().get('api/tokes/user/' + user_id);

    dispatch({
      type: GET_TOKES_SUCCESS,
      payload: data.filter((t) => t.user_id === user_id),
    });
  } catch (err) {
    dispatch({ type: GET_TOKES_ERROR, payload: err });
    logout();
    history.push('/login');
  }
};

export const ADD_TOKE = 'ADD_TOKE';
export const ADD_TOKE_SUCCESS = 'ADD_TOKE_SUCCESS';
export const ADD_TOKE_ERROR = 'ADD_TOKE_ERROR';

export const addToke = (toke) => async (dispatch) => {
  dispatch({ type: ADD_TOKE });

  try {
    let { data } = await axiosWithAuth().post('api/tokes', toke);

    dispatch({ type: ADD_TOKE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ADD_TOKE_ERROR, payload: err });
  }
};

export const SET_TOKE = 'SET_TOKE';

export const setToke = (toke) => (dispatch) => {
  dispatch({ type: SET_TOKE, payload: toke });
};

export const REMOVE_TOKE = 'REMOVE_TOKE';

export const removeToke = () => (dispatch) => {
  dispatch({ type: REMOVE_TOKE });
};

export const EDIT_TOKE = 'EDIT_TOKE';
export const EDIT_TOKE_SUCCESS = 'EDIT_TOKE_SUCCESS';
export const EDIT_TOKE_ERROR = 'EDIT_TOKE_ERROR';

export const editToke = (id, changes) => async (dispatch) => {
  dispatch({ type: EDIT_TOKE });

  try {
    let { data } = await axiosWithAuth().put('api/tokes/' + id, changes);

    dispatch({ type: EDIT_TOKE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: EDIT_TOKE_ERROR, payload: err });
  }
};

export const DELETE_TOKE = 'DELETE_TOKE';
export const DELETE_TOKE_SUCCESS = 'DELETE_TOKE_SUCCESS';
export const DELETE_TOKE_ERROR = 'DELETE_TOKE_ERROR';

export const deleteToke = (id) => async (dispatch) => {
  dispatch({ type: DELETE_TOKE });

  try {
    await axiosWithAuth().delete('api/tokes/' + id);

    dispatch({ type: DELETE_TOKE_SUCCESS, payload: id });
  } catch (err) {
    dispatch({ type: DELETE_TOKE_ERROR, payload: err });
  }
};
