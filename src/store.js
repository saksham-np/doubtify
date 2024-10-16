import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/userReducer'; // Ensure this path is correct

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers as needed
});

const store = createStore(rootReducer);
export default store;
