// react
import { useState } from 'react'
// component
import Quiz from './componets/Quiz/Quiz'
import UserModal from './componets/userModal/UserModal'
function App() {
	const [username, setUsername] = useState('')
	const [isOpen, setIsOpen] = useState(true)

	const closeModal = () => {
		setIsOpen(false)
	}

	return (
		<div className='h-screen flex justify-center items-center'>
			{isOpen ? (
				<UserModal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					closeModal={closeModal}
					username={username}
					setUsername={setUsername}
				/>
			) : (
				<div>
					<Quiz />
				</div>
			)}
		</div>
	)
}

export default App
