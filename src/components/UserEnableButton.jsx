import styled from 'styled-components';

// Estilos para el boton de cambio de estado
const UserEnableButtonStyle = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const UserEnableButton = ({ isActive, onClick }) => {
	return (
		<UserEnableButtonStyle onClick={onClick}>
			<button>{isActive ? 'Desactivar' : 'Activar'}</button>
		</UserEnableButtonStyle>
	);
};

export default UserEnableButton;
