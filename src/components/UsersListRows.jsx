import UserRow from './UserRow';

// Componente para renderizar los UserRow
const UsersListRows = ({ users }) => {

	// ESTO SE EJECUTA CADA VEZ QUE SE RENDERIZA EL COMPONENTE
	
	// Parte 2. HTML que se renderiza en UsersList
	// Si no hay usuarios, regresa el parrafo no hay usuarios
	if (!users.length) return <p>No hay usuarios</p>;
	// Si hay usuarios regresa los componentes UserRow por cada uno
	// No usamos return en map si todo se escribe en una linea
	return users.map(user => <UserRow key={user.id} {...user} />);
};

export default UsersListRows;
