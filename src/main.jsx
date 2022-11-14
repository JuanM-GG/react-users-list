import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';
// import { useForm } from 'react-hook-form';

// const App = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors }
// 	} = useForm();

// 	const onSubmit = data => {
// 		console.log(data);
// 	};

// 	return (
// 		<>
// 			<h2>Formulario</h2>
// 			<form onSubmit={handleSubmit(onSubmit)}>
// 				<div>
// 					<label>Name: </label>
// 					<input type='text' {...register('name')}></input>
// 				</div>
// 			</form>
// 		</>
// 	);
// };

const container = document.getElementById('root');

createRoot(container).render(<App />);
