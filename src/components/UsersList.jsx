import styled from 'styled-components';
import { useState } from 'react';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';
import { UsersContext } from '../lib/context/UsersContext';

// Estilos para el componente /////////////////////////////////////////////////////////
// Estilo para el componente completo
const UsersListDivStyle = styled.div`
	width: 100%;
	max-width: 800px;
	margin: auto;
	padding: 1rem;
`;

// Componente ///////////////////////////////////////////////////////////////////////
const UsersList = ({ initialUsers }) => {

	// Parte 1. Declarar todos los hooks a usar en el componente
	// Crear el estado filters y destructurar sus componentes y su handleFilters mediante un custom hook
	const { search, onlyActive, sortBy, handleFilters } = useFilters();
	// // Crear el estado users y su toggleUserActive mediante un custom hook
	const { users, toggleUserActive } = useUsers(initialUsers);

	// ESTO SE EJECUTA CADA VEZ QUE SE RENDERIZA EL COMPONENTE

	// Parte 2. Crear las funciones que van a ser llamadas en cada renderizado
	// 1. Filtrar usuarios por nombre
	let usersFiltered = filterUsersByName(users, search);
	// 2. Filtrar usuarios activos
	usersFiltered = filterActiveUsers(usersFiltered, onlyActive);
	// 3. Ordenar usuarios
	usersFiltered = sortUsers(usersFiltered, sortBy);
	
	// Parte 3. Crear el HTML que se va a renderizar en App
	return (
		<UsersListDivStyle> {/* Un estilo para todo el componente */}
			{/* Hijo 1. Etiqueta h1 */}
			<h1>Listado de Usuarios</h1> 
			{/* Hijo 2. Componente que filtra a los usuarios */}
			<UsersListFilters handleFilters={handleFilters} /> {/* Recibe la funcion que va a actualizar el estado filters */}
			{/* Usamos un UseContext para pasar la funcion toggleUserActive a UserStatus */}
			<UsersContext.Provider value={{ toggleUserActive }}> {/* Recibe la funcion que va a actualizar la lista de usuarios como un valor de Context */}
				{/* Hijo 3. Componente que muestra a los usuarios */}
				<UsersListRows users={usersFiltered} />
			</UsersContext.Provider>
		</UsersListDivStyle>
	);
};

// Parte 4. Crear las funciones que generan los custom hooks
// Función para crear estado filter y su setState
const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	});
	const handleFilters = (search, onlyActive, sortBy) => {
		setFilters({ search, onlyActive, sortBy });
	};

	return {
		...filters,
		handleFilters
	};
};
// Funcion para crear estado users y su toggleActiveUsers 
const useUsers = initialUsers => {
	// Estado para guardar los usuarios
	const [users, setUsers] = useState(initialUsers);
	// Cambiar el estado activo del usuario
	const toggleUserActive = userId => {
		const newUsers = users.map(user => {
			if (user.id === userId) {
				user.active = !user.active;
			}
			return user; // Con map SIEMPRE HAY UN RETURN
		});
		setUsers(newUsers);
	};

	return {
		users,
		toggleUserActive
	};
};
// Parte 5. Crear las funciones que manipulan los estados
// Funcion para filtrar usuarios por nombre
const filterUsersByName = (users, search) => {
	// Si no hay nombre para buscar, regresa todos los usuarios
	// Regresamos una copia para tener una funcion pura
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
