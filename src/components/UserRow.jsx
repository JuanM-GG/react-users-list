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
	const [activeState, setActiveState] = useState(active);
	const handleState = () => {
		setActiveState(!activeState);
	};

	return (
		<UserRowDivStyle>
			<NameDivStyle>
				<span>{name}</span>
			</NameDivStyle>
			<UserStatus activeState={activeState} />
			<UserRole role={role} />
			<UserEnableButton activeState={activeState} onClick={handleState} />
		</UserRowDivStyle>
	);
};

export default UserRow;
