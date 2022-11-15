import UserRow from './UserRow';

// Función para renderizar los UserRow
const UsersListRows = ({ users, handleUsers }) => {
	// Si no hay usuarios, regresa el parrafo no hay usuarios
	if (!users.length) return <p>No hay usuarios</p>;
	// Si hay usuarios regresa los componentes UserRow por cada uno
	return users.map(user => (
		<UserRow key={user.id} {...user} handleUsers={handleUsers} />
	));
};

export default UsersListRows;
