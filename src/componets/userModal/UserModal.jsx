//react
import { useState, Fragment } from 'react'
// react-hook-form
import { useForm } from 'react-hook-form'
// headless-ui
import { Dialog, Transition } from '@headlessui/react'

const UserModal = ({ isOpen, setIsOpen, closeModal, username, setResult }) => {
	const {
		register,
		setError,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const handleSubmitForm = handleSubmit(data => {
		setResult(prevState => ({
			username: data.username,
			...prevState,
		}))
		setIsOpen(false)
	})

	const onCloseModal = () => {
		if (username === '') {
			console.log('working')
			setError('username', {
				type: 'custom',
				message: 'This field cannot be empty!',
			})
			return
		}

		closeModal()
	}

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={onCloseModal}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-black/25' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className='w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
								<form onSubmit={handleSubmitForm}>
									<div className='mb-2'>
										<input
											type='text'
											className='w-full border border-slate-300 py-1.5 px-2 rounded-md mb-1 outline-none focus:border-color-3'
											placeholder='Username'
											autoComplete='off'
											id='username'
											{...register('username', {
												required: {
													value: true,
													message: 'This field cannot be empty!',
												},
											})}
										/>
										<div>
											<p className='text-sm text-red-500'>
												{errors.username && errors.username.message}
											</p>
										</div>
									</div>
									<div>
										<button
											type='submit'
											className='w-full py-2 px-3 text-center text-white font-semibold bg-color-3 rounded-md'
										>
											Ingresar
										</button>
									</div>
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

export default UserModal
