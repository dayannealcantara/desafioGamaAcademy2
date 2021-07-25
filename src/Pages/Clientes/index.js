import React,{useState} from 'react'
import AddUserForm from '../../Components/Form/AddUserForm'
import EditUserForm from '../../Components/Form/EditUserForm'
import UserTable from '../../Components/Tables/UserTable'

import './Clientes.css'

const Clientes = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Teste', email: 'teste@gmail.com' },
		{ id: 2, name: 'Craig', email: 'crig@gmail.com' },
		{ id: 3, name: 'Ben', email: 'ben@gmail.com' },
	]

	const initialFormState = { id: null, name: '', email: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1;
		localStorage.setItem('@welcome-app/usuario', JSON.stringify({id: user.id, name: user.name, email: user.email }) );
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
	
		setEditing(false)


		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, email: user.email })
	}

  return (
    <div className="gridArea">
			<div className='cntConteudo'>
      	<div >
					{editing ? (
						<>
							<h2>Editar Cliente</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</>
					) : (
						<>
							<h2>Adicionar Cliente</h2>
							<AddUserForm addUser={addUser} />
						</>
					)}
				</div>
				<div className="">
					<h2>Lista de Clientes</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
				</div>
				<br />
				<br />
    </div>
  )
}

export default Clientes
