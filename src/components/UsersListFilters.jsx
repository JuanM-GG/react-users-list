import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import styled from 'styled-components';

// Estilos para el formulario

const UserFormStyle = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
`;

const UserCheckBoxDivStyle = styled.div`
	display: flex;
	align-items: center;

	input[type='checkbox'] {
		height: 1rem;
		width: 1rem;
		margin-right: 0.5rem;
	}
`;

const UsersListFilters = ({ handleFilters }) => {
	const { register, watch, handleSubmit } = useForm({
		defaultValues: {
			search: '',
			onlyActive: false,
			sortBy: 0
		}
	});

	// Observar el valor de las entradas
	let { search, onlyActive, sortBy } = watch();

	sortBy = Number(sortBy);

	const onSubmit = data => console.log(data);
	useEffect(() => {
		handleFilters(search, onlyActive, sortBy);
	}, [search, onlyActive, sortBy]);

	return (
		<UserFormStyle onSubmit={handleSubmit(onSubmit)}>
			<input type='text' {...register('search')}></input>
			<UserCheckBoxDivStyle>
				<input type='checkbox' {...register('onlyActive')}></input>
				<span> Sólo activos</span>
			</UserCheckBoxDivStyle>
			<select {...register('sortBy')}>
				<option value={0}>Por defecto</option>
				<option value={1}>Por nombre</option>
			</select>
			<div>
				<button type='submit'>Buscar Usuarios</button>
			</div>
		</UserFormStyle>
	);
};

export default UsersListFilters;
