// react
import { useState } from 'react'

const Content = ({ questions, setResult, setShowResult }) => {
	const [activeQuestion, setActiveQuestion] = useState(0)
	const [selectedAnswer, setSelectedAnswer] = useState('')
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)

	const { question, choices, correctAnswer } = questions[activeQuestion]

	const onAnswerSelected = (answer, index) => {
		setSelectedAnswerIndex(index)
		if (answer === correctAnswer) {
			setSelectedAnswer(true)
		} else {
			setSelectedAnswer(false)
		}
	}

	const onClickNextHandler = () => {
		// reset so it won't have any effet on the next question
		setSelectedAnswerIndex(null)

		setResult(prevResult =>
			selectedAnswer
				? {
						...prevResult,
						score: prevResult.score + 1,
						correctAnswers: prevResult.correctAnswers + 1,
				  }
				: {
						...prevResult,
						wrongAnswers: prevResult.wrongAnswers + 1,
				  },
		)

		if (activeQuestion !== questions.length - 1) {
			setActiveQuestion(prevState => prevState + 1)
		} else {
			setActiveQuestion(0)
			setShowResult(true)
		}
	}

	const addLeadingZero = number => (number > 9 ? number : `0${number}`)

	return (
		<div className='container m-auto w-10 max-w-xl min-w-max bg-white rounded-md mt-28 py-4 px-6  sm:py-8 sm:px-16'>
			<div>
				<span className='text-lg sm:text-3xl font-bold text-color-3'>
					{addLeadingZero(activeQuestion + 1)}
				</span>
				<span className='text-base sm:text-lg font-sembold text-color-4'>
					/{addLeadingZero(questions.length)}
				</span>
			</div>
			<h2 className='text-2xl sm:text-4xl font-bold'>{question}</h2>
			<ul className='mt-5'>
				{choices.map((answer, index) => (
					<li
						key={index}
						className={`${
							selectedAnswerIndex === index
								? 'bg-pink-100 border-pink-500'
								: null
						} border border-slate-200 rounded-xl py-2 px-2 mb-2.5 text-sm sm:text-base cursor-pointer`}
						onClick={() => onAnswerSelected(answer, index)}
					>
						{answer}
					</li>
				))}
			</ul>
			<div className='flex justify-end'>
				<button
					className={`${
						selectedAnswerIndex === null
							? 'bg-color-4 cursor-not-allowed text-slate-500'
							: 'cursor-pointer'
					} bg-pink-500 rounded-lg text-white py-2.5 px-4 outline-none text-sm sm:text-base mt-3`}
					onClick={onClickNextHandler}
					disabled={selectedAnswerIndex === null}
				>
					{activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
				</button>
			</div>
		</div>
	)
}

export default Content
