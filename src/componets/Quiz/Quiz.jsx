// react
import { useState } from 'react'
// quiz
import { quiz } from '../../quiz'
import Result from '../Result/Result'
import Content from './Content/Content'

const Quiz = () => {
	const [showResult, setShowResult] = useState(false)
	const [result, setResult] = useState({
		score: 0,
		correctAnswers: 0,
		wrongAnswers: 0,
	})

	const { questions } = quiz

	return (
		<>
			{showResult ? (
				<Result result={result} questions={questions} />
			) : (
				<Content
					questions={questions}
					setResult={setResult}
					setShowResult={setShowResult}
				/>
			)}
		</>
	)
}

export default Quiz
