export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";
export const ADD_ISSUE = 'ADD_ISSUE';
export const UPDATE_ISSUE = 'UPDATE_ISSUE';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const UPDATE_REPORT = 'UPDATE_REPORT';
export const LOAD_INFO = 'LOAD_INFO';
export const CHECK_USER='CHECK_USER';
export const DELETE_ISSUE = 'DELETE_ISSUE';

export const loadInfo = (userId1) => ({
  type: 'LOAD_INFO',
  payload: userId1,
});
export const checkUser = (id,password) => ({
  type: 'CHECK_USER',
  payload:{id,password},
});
export const changeStatus = (index, status) => ({
  type: CHANGE_STATUS,
  payload: { index, status },
});
// actions.js

export const CHANGE_BUTTON_TEXT = 'CHANGE_BUTTON_TEXT';
export const updateIssue = (id, status, comments) => ({
  type: UPDATE_ISSUE,
  payload: { id, status, comments },
});
export const changeButtonText = (text) => ({
  type: CHANGE_BUTTON_TEXT,
  payload: text,
});

export const addIssue = (id,status,comments,date) => ({
  type: ADD_ISSUE,
  payload: {id,status,comments,date},
});
export const submitIssue = (issueData) => {
  console.log("enter issueData---------->",issueData);
  
  return {
    type: "SUBMIT_ISSUE",
    payload: issueData,
  };
};
export const deleteIssue = (id) => ({
  type: DELETE_ISSUE,
  payload: id,
});
export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});
export const editUser = (user) => ({
  type: EDIT_USER,
  payload: user,
});
export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

// Add action creators for editing users as needed

// Async Action Creator (example for API calls)
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      // Example: fetch users from an API
      const response = await fetch("/api/users");
      const data = await response.json();
      // Dispatch action to update state with fetched users
      // Example assuming API returns data in { users: [] } format
      dispatch({ type: "FETCH_USERS_SUCCESS", payload: data.users });
    } catch (error) {
      dispatch({ type: "FETCH_USERS_FAILURE", payload: error.message });
    }
  };
};
