import styled from 'styled-components';
import UserRole from './UserRole';
import UserStatus from './UserStatus';

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
	width: 60%;
	span {
		font-weight: bold;
	}
`;

const UserRow = ({ name, active, role }) => {
	return (
		<UserRowDivStyle>
			<NameDivStyle>
				<span>{name}</span>
			</NameDivStyle>
			<UserStatus active={active} />
			<UserRole role={role} />
		</UserRowDivStyle>
	);
};

export default UserRow;
