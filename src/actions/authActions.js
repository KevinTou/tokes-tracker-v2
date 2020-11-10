import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = (user) => async (dispatch) => {
  dispatch({ type: LOGIN });

  try {
    let { data } = await axios.post('http://localhost:4000/login', user);
    // let { data } = await axios.post(
    //   'https://tokes-tracker.herokuapp.com/login',
    //   user
    // );

    localStorage.setItem('token', data.token);
    localStorage.setItem('user_id', data.user_id);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: LOGIN_ERROR, payload: err });
  }
};

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const register = (user) => async (dispatch) => {
  dispatch({ type: REGISTER });

  try {
    let { data } = await axios.post('http://localhost:4000/register', user);
    // let { data } = await axios.post(
    //   'https://tokes-tracker.herokuapp.com/register',
    //   user
    // );

    localStorage.setItem('token', data.token);
    localStorage.setItem('user_id', data.user_id);
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: REGISTER_ERROR, payload: err });
  }
};

export const LOGOUT = 'LOGOUT';

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('token');
  localStorage.removeItem('user_id');
};
