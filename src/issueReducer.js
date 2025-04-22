// issueReducer.js

// import {
//   ADD_ISSUE,
//   UPDATE_ISSUE,
//   ADD_USER,
//   EDIT_USER,
//   DELETE_USER,
//   CHANGE_STATUS,
//   UPDATE_REPORT, // Add missing action type
// } from './actions'; // Correct import path

const initialState = {
  issues: [], // Manage issues separately
  users: [], // Manage users separately
  reports: [], // Manage reports separately
  auth: {}, // Manage authentication state
  buttonTexts: "", // Manage button texts separately
  // infos: [],
};

console.log("------>>>>>>>>---->>>", initialState);

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_BUTTON_TEXT":
      return {
        ...state,
        buttonTexts: action.payload,
      };
    case "SUBMIT_ISSUE":
      return {
        ...state,
        issues: [...state.issues, action.payload],
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "EDIT_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
      case "DELETE_ISSUE":
      return {
        ...state,
        issues: state.issues.filter(issue => issue.id !== action.payload),
      };
    case "ADD_ISSUE":
      return {
        ...state,
        reports: [...state.reports, action.payload],
      };
    // case "LOAD_INFO":
    //   return {
    //     ...state,
    //     infos: [action.payload], // Update the userId in infos
    //   };

    case 'CHANGE_STATUS':
      return {
        ...state,
        issues: state.issues.map((issue, index) =>
          index === action.payload.index ? { ...issue, status: action.payload.status } : issue
        ),
      };
      case "UPDATE_ISSUE":
        return {
          ...state,
          reports: state.reports.map(report =>
            report.id === action.payload.id ? { ...report, ...action.payload } : report
          ),
        };
    // report.id === action.payload.id ? { ...report, ...action.payload.updatedData } : report
    
    default:
      return state;
  }
};

export default issueReducer;
