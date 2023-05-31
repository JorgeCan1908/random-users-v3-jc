import './Title.css';

export default function Title({ newUser, deleteUsers }) {
	const eventAddUser = () => {
		newUser();
	};
	const eventDeleteUsers = () => {
		deleteUsers();
	};

	return (
		<>
			<h1 className='title'>Random Users v3</h1>
			<div className='buttons'>
				<button
					className='btn btn-add'
					onClick={eventAddUser}
				>
					Agregar Usuario
				</button>
				<button
					className='btn btn-delete'
					onClick={eventDeleteUsers}
				>
					Eliminar Suspendidos
				</button>
			</div>
		</>
	);
}