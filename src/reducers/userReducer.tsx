// reducers/userReducer.ts
import { FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE } from '../actions/userActions';

interface User {
  user_ID: number;
  first_Name: string;
  last_Name: string;
}

interface UserState {
  data: User[];
  error: string | null;
}

const initialState: UserState = {
  data: [],
  error: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
