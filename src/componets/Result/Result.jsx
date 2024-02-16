const Result = ({ questions, result }) => {
	return (
		<div className='max-w-lg bg-white rounded-md mt-28 py-8 px-16'>
			<h3 className='text-color-3 font-bold text-2xl mb-4'>Result</h3>
			<p className='text-lg mb-2 text-center font-semibold'>
				Total Question:{' '}
				<span className='text-2xl text-color-3 font-bold'>
					{questions.length}
				</span>
			</p>
			<p className='text-lg mb-2 text-center font-semibold'>
				Total Score:
				<span className='text-2xl text-color-3 font-bold'> {result.score}</span>
			</p>
			<p className='text-lg mb-2 text-center font-semibold'>
				Correct Answers:
				<span className='text-2xl text-color-3 font-bold'>
					{' '}
					{result.correctAnswers}
				</span>
			</p>
			<p className='text-lg mb-2 text-center font-semibold'>
				Wrong Answers:
				<span className='text-2xl text-color-3 font-bold'>
					{' '}
					{result.wrongAnswers}
				</span>
			</p>
		</div>
	)
}

export default Result
