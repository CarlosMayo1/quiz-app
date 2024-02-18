// react
import { useState } from 'react'
// quiz
import { quiz } from '../../quiz'
// components
import Result from '../Result/Result'
import Content from './Content/Content'

const Quiz = ({ result, setResult }) => {
	const [showResult, setShowResult] = useState(false)

	const { questions } = quiz

	return (
		<>
			{showResult ? (
				<Result
					result={result}
					questions={questions}
					setShowResult={setShowResult}
				/>
			) : (
				<Content
					questions={questions}
					result={result}
					setResult={setResult}
					setShowResult={setShowResult}
				/>
			)}
		</>
	)
}

export default Quiz
