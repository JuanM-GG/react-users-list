import styled from 'styled-components';
import UserRole from './UserRole';
import UserStatus from './UserStatus';
import UserEnableButton from './UserEnableButton';
import { useContext } from 'react';
import { UsersContext } from '../lib/context/UsersContext';
// Estilos para UserRow
const UserRowDivStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	border: 1px solid gray;
	padding: 1rem;
	border-radius: 1rem;
	margin-top: 1rem;
`;

// Estilo para name
const NameDivStyle = styled.div`
	width: 40%;
	span {
		font-weight: bold;
	}
`;

const UserRow = ({ name, active, role, id }) => {
	const { toggleUserActive } = useContext(UsersContext);

	return (
		<UserRowDivStyle>
			<NameDivStyle>
				<span>{name}</span>
			</NameDivStyle>
			<UserStatus isActive={active} />
			<UserRole role={role} />
			<UserEnableButton
				isActive={active}
				onClick={() => toggleUserActive(id)}
			/>
		</UserRowDivStyle>
	);
};

export default UserRow;
