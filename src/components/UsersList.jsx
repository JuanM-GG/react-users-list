import UserRow from './UserRow';
import styled from 'styled-components';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Estilo para el componente UserList
const UsersListDivStyle = styled.div`
	width: 100%;
	max-width: 600px;
	margin: auto;
	padding: 1rem;
`;

const UsersList = ({ users }) => {
	// Estado para buscar usuarios por nombre
	// const [search, setSearch] = useState('');

	const { register, watch, handleSubmit } = useForm({
		defaultValues: {
			searchName: ''
		}
	});

	// Submit entradas
	const onSubmit = data => {
		console.log(data);
	};

	// Observar el valor de la entrada searchName
	const search = watch('searchName');

	// Obtener usuarios con el nombre buscado
	const usersFiltered = filterUsersByName(users, search);

	// Generar componentes UserRow con los usuarios filtrados
	const usersRendered = renderUsers(usersFiltered);

	return (
		<UsersListDivStyle>
			<h1>Listado de Usuarios</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type='text' {...register('searchName')}></input>
				<button type='submit'>Buscar Usuarios</button>
			</form>
			{usersRendered}
		</UsersListDivStyle>
	);
};

const filterUsersByName = (users, search) => {
	// Si no hay nombre para buscar, regresa todos los usuarios
	if (!search) return users;

	// Pasa el nombre a buscar a minusculas
	const lowerCaseSearch = search.toLowerCase();
	// Filtra los usuarios con el nombre de busqueda
	return users.filter(user =>
		user.name.toLowerCase().startsWith(lowerCaseSearch)
	);
};

const renderUsers = users => {
	// Si no hay usuarios, regresa el parrafo no hay usuarios
	if (!users.length) return <p>No hay usuarios</p>;
	// Si hay usuarios regresa los componentes UserRow por cada uno
	return users.map(user => <UserRow key={user.id} {...user} />);
};

export default UsersList;
