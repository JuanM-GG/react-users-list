import UsersList from './components/UsersList';
import {users} from './data'


const App = () => {
	return <UsersList initialUsers={users} />;
};

export default App;
