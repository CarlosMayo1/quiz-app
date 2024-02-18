// react
import { useState } from 'react'
// component
import Quiz from './componets/Quiz/Quiz'
import UserModal from './componets/userModal/UserModal'

function App() {
	const [isOpen, setIsOpen] = useState(true)
	const [result, setResult] = useState({
		username: '',
		score: 0,
		correctAnswers: 0,
		wrongAnswers: 0,
	})

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
					username={result.username}
					setResult={setResult}
				/>
			) : (
				<div>
					<Quiz result={result} setResult={setResult} />
				</div>
			)}
		</div>
	)
}

export default App
