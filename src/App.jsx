import UsersList from './components/UsersList';

// users es global
const users = [
	{
		name: 'Pablo Castellanos',
		role: 'teacher',
		active: true,
		id: 0
	},
	{
		name: 'Carlos Hernández',
		role: 'student',
		active: false,
		id: 1
	},
	{
		name: 'Marina Espinoza',
		role: 'teacher',
		active: true,
		id: 2
	}
];

const App = () => {
	return (
		<UsersList users={users}>
			<h1>Lista de Usuarios</h1>
		</UsersList>
	);
};

export default App;
