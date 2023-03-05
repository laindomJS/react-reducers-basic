import { useReducer } from 'react';
import { GET_USERS } from '../context/types';

export const useFetchReducer = (initialState, UsersReducer) => {

  const [state, dispatch] = useReducer(UsersReducer, initialState);

  const getUsers = async () => {
		try {
      const res = await fetch('https://reqres.in/api/users');
		  const users = await res.json();
      const { data } = users;
      dispatch({ type: GET_USERS, payload: data })
    } catch (err) {
      console.log(err);
    }
	}

  return {
    getUsers,
    state,
  }

}