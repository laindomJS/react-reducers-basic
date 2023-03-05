import { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';

export const Users = () => {

  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <h1>Users</h1>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  )
}
