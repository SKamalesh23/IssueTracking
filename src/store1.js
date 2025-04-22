import { createStore } from 'redux';

// Action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Action creators
export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

// Reducer
const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

// Create store
const store1 = createStore(authReducer);

export default store1;
