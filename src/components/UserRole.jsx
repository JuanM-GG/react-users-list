import styled from 'styled-components';

// Estilo para UserRole
const RoleDivStyle = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		text-transform: uppercase;
		font-size: 0.75rem;
		background-color: ${props => props.backgroundColorRole};
		padding: 0.25rem 0.5rem;
		border-radius: 0.5rem;
	}
`;

const UserRole = ({ role }) => {
	const ROLE_STYLES = {
		teacher: ['Profesor', '#61dafb'],
		student: ['Alumno', 'lightgreen'],
		other: ['Otro', 'lightgray']
	};

	const [roleName, backgroundColorRole] =
		ROLE_STYLES[role] || ROLE_STYLES.other;
	return (
		<RoleDivStyle backgroundColorRole={backgroundColorRole}>
			<span>{roleName}</span>
		</RoleDivStyle>
	);
};

export default UserRole;
