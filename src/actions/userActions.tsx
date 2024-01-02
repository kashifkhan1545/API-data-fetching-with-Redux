// actions/userActions.tsx
import axios from 'axios';
import { Dispatch } from 'redux';

export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';
interface User {
  user_ID: number;
  first_Name: string;
  last_Name: string;
  user_Email: string;
  user_Contact: string;
  user_Password: string;
}
export const fetchUserData = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('http://192.168.10.39/api/Patient_L/GetUser');
      dispatch({
        type: FETCH_USER_DATA_SUCCESS,
        payload: response.data.result as User[],
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_USER_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};
