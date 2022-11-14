import styled from 'styled-components';
import UserRole from './UserRole';
import UserStatus from './UserStatus';
import { useState } from 'react';
import UserEnableButton from './UserEnableButton';
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

const UserRow = ({ name, active, role }) => {
	const [isActive, setIsActive] = useState(active);
	const handleState = () => {
		setIsActive(!isActive);
	};

	return (
		<UserRowDivStyle>
			<NameDivStyle>
				<span>{name}</span>
			</NameDivStyle>
			<UserStatus isActive={isActive} />
			<UserRole role={role} />
			<UserEnableButton isActive={isActive} onClick={handleState} />
		</UserRowDivStyle>
	);
};

export default UserRow;
