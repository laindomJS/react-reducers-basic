import { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import { User } from './User';

export const Users = () => {
	const { users, getUsers } = useContext(UserContext);

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<h1>Users</h1>
			<div className='userContainer'>
				{users.map((user) => (
					<User key={user.id} {...user} />
				))}
			</div>
		</>
	)
}
