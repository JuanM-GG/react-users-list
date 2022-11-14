import styled from 'styled-components';

// Estilo para UserStatus
const ActiveDivStyle = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		color: ${props => (props.active ? 'green' : 'red')};
	}
`;

const UserStatus = ({ activeState }) => {
	return (
		<ActiveDivStyle active={activeState}>
			<span>{activeState ? 'Activo' : 'Inactivo'}</span>
		</ActiveDivStyle>
	);
};

export default UserStatus;
