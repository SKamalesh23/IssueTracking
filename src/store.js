// store.js

import { createStore, combineReducers } from 'redux';
import issueReducer from './issueReducer';

const rootReducer = combineReducers({
  issues: issueReducer,
  users: issueReducer,
  reports: issueReducer,
  auth: issueReducer,
  buttonTexts: issueReducer,
  // infos: issueReducer,
});

const store = createStore(rootReducer);

export default store;
