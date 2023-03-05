import { useFetchReducer } from '../hooks/useFetchReducer';

import UserContext from './UserContext';
import UsersReducer from './UsersReducer';

export const UserState = ({ children }) => {
  const initialState = {
    users: [],
  }

  const { getUsers, state } = useFetchReducer(initialState, UsersReducer);

	return (
    <UserContext.Provider value={{
      users: state.users,
      getUsers
    }}>
      {children}
    </UserContext.Provider>
  ) 
}

