import { useReducer } from 'react';
import { GET_USERS } from '../context/types';

export const useFetchReducer = (initialState, UsersReducer) => {

  const [state, dispatch] = useReducer(UsersReducer, initialState);

  const getUsers = async () => {
		try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
		  const data = await res.json();
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