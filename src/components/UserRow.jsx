import styled from 'styled-components';
import UserRole from './UserRole';
import UserStatus from './UserStatus';
import UserEnableButton from './UserEnableButton';
import { useContext } from 'react';
import { UsersContext } from '../lib/context/UsersContext';

// Estilos del componente ///////////////////////////////////

// Estilos para el componente completo
const UserRowDivStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	border: 1px solid gray;
	padding: 1rem;
	border-radius: 1rem;
	margin-top: 1rem;
`;

// Estilo para el nombre
const NameDivStyle = styled.div`
	width: 40%;
	span {
		font-weight: bold;
	}
`;

// Componente ////////////////////////////////////////////////////
const UserRow = ({ name, active, role, id }) => {

	// Parte 1. Usar el hook para obtener la funcion toggleUserActive en el UserSContext
	const { toggleUserActive } = useContext(UsersContext);

	// ESTO SE EJECUTA CADA VEZ QUE SE RENDERIZA EL COMPONENTE 

	// Parte 2. HTML que se renderiza en UserListRows
	return (
		<UserRowDivStyle> {/* Estilo del componente */}
			{/* Hijo 1. Texto HTML para mostrar el nombre */}
			<NameDivStyle>
				<span>{name}</span>
			</NameDivStyle>
			{/* Hijo 2. Componente para mostrar el status */}
			<UserStatus isActive={active} /> {/* Recibe el estado active */}
			{/* Hijo 3. Componente para mostrar el rol */}
			<UserRole role={role} /> {/* Recibe el estado rol */}
			{/* Hijo 4. Componente para  cambiar el estado active */}
			<UserEnableButton
				isActive={active}
				onClick={() => toggleUserActive(id)} 
			/> {/*
				Recibe el estado active 
				Recibe la funcion que modifica el estado de los usuarios
			 */}
		</UserRowDivStyle>
	);
};

export default UserRow;
