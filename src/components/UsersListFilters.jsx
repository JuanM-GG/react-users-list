// Importar modulos
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import styled from 'styled-components';

// Estilos para el componente ////////////////////////////////////////////////////////////////

// Estilo para el componente completo
const UserFormStyle = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
`;

// Estilo para la entrada de texto 
const UserTextInputStyle = styled.input`
	font-family: Arial, Helvetica, sans-serif;
	background-color: blanchedalmond;
	border-radius: 25px;
	
`

// Estilo para el checkbox
const UserCheckBoxDivStyle = styled.div`
	display: flex;
	align-items: center;

	input[type='checkbox'] {
		height: 1rem;
		width: 1rem;
		margin-right: 0.5rem;
	}
`;

// Componente /////////////////////////////////////////////////////////////////////////
const UsersListFilters = ({ handleFilters }) => {
	// Parte 1. Crear los hooks a usar en el componente
	// Crear datos del formulario
	const { register, watch, handleSubmit } = useForm({
		defaultValues: {
			search: '',
			onlyActive: false,
			sortBy: 0
		}
	});

	// ESTO SE EJECUTA CADA VEZ QUE SE RENDERIZA EL COMPONENTE

	// Parte 2. Funciones que se llaman con cada renderizado
	// Observar el valor de las entradas
	let { search, onlyActive, sortBy } = watch();
	// sortBy es un string en este punto, hay que transformarlo a un entero
	sortBy = Number(sortBy);
	// Solo para verificar que la data en el formulario es correcta
	const onSubmit = data => console.log(data);
	// Usamos la data en el formulario para cambiar el estado de filters en UserList
	useEffect(() => {
		handleFilters(search, onlyActive, sortBy);
	}, [search, onlyActive, sortBy]);

	// Parte 3. HTML que va a ser renderizado en UserList
	return (
		<UserFormStyle onSubmit={handleSubmit(onSubmit)}> {/* Solo para verificar la data en el formulario */}
			{/* Hijo 1. Entrada de texto */}
			<UserTextInputStyle type='text' {...register('search')}/>
			{/* Hijo 2. Checkbox */}
			<UserCheckBoxDivStyle>
				<input type='checkbox' {...register('onlyActive')}></input>
				<span> Sólo activos</span>
			</UserCheckBoxDivStyle>
			{/* Hijo 3. Entrada de seleccion */}
			<select {...register('sortBy')}>
				<option value={0}>Por defecto</option>
				<option value={1}>Por nombre</option>
			</select>
			{/* Hijo 4. Boton de submit */}
			<div>
				<button type='submit'>Buscar Usuarios</button> {/* Solo para verificar la data en el formulario */}
			</div>
		</UserFormStyle>
	);
};

export default UsersListFilters;
