// react
import { useState } from 'react'
// component
import Quiz from './componets/Quiz/Quiz'
import UserModal from './componets/userModal/UserModal'
function App() {
	const [isOpen, setIsOpen] = useState(true)

	const closeModal = () => {
		setIsOpen(false)
	}

	return (
		<>
			{isOpen && <UserModal isOpen={isOpen} closeModal={closeModal} />}
			<div className='h-screen flex justify-center items-center'>
				<Quiz />
			</div>
		</>
	)
}

export default App
