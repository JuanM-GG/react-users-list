import styled from 'styled-components';
import { useState } from 'react';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';

// Estilo para el componente UserList
const UsersListDivStyle = styled.div`
	width: 100%;
	max-width: 800px;
	margin: auto;
	padding: 1rem;
`;

const UsersList = ({ initialUsers }) => {
	// Custom Hook
	// Crear el estado filters y destructurar sus componentes y su setState
	const { search, onlyActive, sortBy, setFilters } = useFilters();
	// Estado para guardar los usuarios
	const [users, setUsers] = useState(initialUsers);

	// Cambiar los filtros
	const handleFilters = (search, onlyActive, sortBy) => {
		setFilters({ search, onlyActive, sortBy });
	};

	// Cambiar el estado activo del usuario
	const toggleUserActive = userId => {
		const newUsers = users.map(user => {
			if (user.id === userId) {
				user.active = !user.active;
			}
			return user;
		});
		setUsers(newUsers);
	};

	// Filtrar usuarios activos
	let usersFiltered = filterActiveUsers(users, onlyActive);
	// Filtrar usuarios por nombre
	usersFiltered = filterUsersByName(usersFiltered, search);
	// Ordenar usuarios
	usersFiltered = sortUsers(usersFiltered, sortBy);
	return (
		<UsersListDivStyle>
			<h1>Listado de Usuarios</h1>
			{/* Formulario */}
			<UsersListFilters handleFilters={handleFilters} />
			{/* Componentes UserRow renderizados */}
			<UsersListRows users={usersFiltered} handleUsers={toggleUserActive} />
		</UsersListDivStyle>
	);
};
// Función para crear estado filter y su setState
const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	});

	return {
		...filters,
		setFilters
	};
};

// Función para filtrar por nombre
const filterUsersByName = (users, search) => {
	// Si no hay nombre para buscar, regresa todos los usuarios
	if (!search) return [...users];

	// Pasa el nombre a buscar a minusculas
	const lowerCaseSearch = search.toLowerCase();
	// Filtra los usuarios con el nombre de busqueda
	return users.filter(user =>
		user.name.toLowerCase().startsWith(lowerCaseSearch)
	);
};
// Función para filtrar los usuarios activos
const filterActiveUsers = (users, active) => {
	if (!active) return [...users];
	return users.filter(user => user.active);
};
// Función para ordenar los usuarios
const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];
	switch (sortBy) {
		case 1:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		default:
			return sortedUsers;
	}
};

export default UsersList;
