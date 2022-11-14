import UserRow from './UserRow';
import styled from 'styled-components';

// Estilo para el componente UserList
const UsersListDivStyle = styled.div`
	width: 100%;
	max-width: 500px;
	margin: auto;
	padding: 1rem;
`;

const UsersList = ({ children, users }) => {
	const usersRendered =
		users.length > 0 ? (
			users.map(user => <UserRow key={user.id} {...user} />)
		) : (
			<p>No hay usuarios</p>
		);

	return (
		<UsersListDivStyle>
			{children}
			{usersRendered}
		</UsersListDivStyle>
	);
};

export default UsersList;
