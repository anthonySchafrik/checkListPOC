import { createStore, combineReducers } from 'redux';

import notesReducer from './reducers/notesReducer';

const rootReducer = combineReducers({
  notesObject: notesReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

const store = configureStore();

export default store;
