// reducers/index.ts
import { combineReducers } from 'redux';
import userReducer from './userReducer';

export interface User {
  user_ID: number;
  first_Name: string;
  last_Name: string;
}

export interface RootState {
  user: {
    data: User[];
    error: string | null;
  };
  // Add other reducers and their states here
}

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

export default rootReducer;
