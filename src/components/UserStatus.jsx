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

const UserStatus = ({ active }) => {
	return (
		<ActiveDivStyle active={active}>
			<span>{active ? 'Activo' : 'Inactivo'}</span>
		</ActiveDivStyle>
	);
};

export default UserStatus;
