import FormInput from './FormInput'
import FormText from './FormText'

function Form(props) {
	const { VITE_MAX_NAME, VITE_MAX_EMAIL, VITE_MAX_MESSAGE } = import.meta.env
	const {
		name,
		setName,
		email,
		setEmail,
		message,
		setMessage,
		handler,
		enabled,
	} = props.data

	const nameOptions = {
		name: 'name',
		label: 'Nome',
		type: 'text',
		handler: value => setName(value),
		max: VITE_MAX_NAME,
		value: name,
		enabled,
	}
	const emailOptions = {
		name: 'email',
		label: 'Email',
		type: 'text',
		handler: value => setEmail(value),
		max: VITE_MAX_EMAIL,
		value: email,
		enabled,
	}
	const messageOptions = {
		name: 'message',
		label: 'Mensagem',
		type: 'text',
		handler: value => setMessage(value),
		max: VITE_MAX_MESSAGE,
		value: message,
		enabled,
	}

	const handleSubmit = e => {
		e.preventDefault()

		handler()
	}

	return (
		<form className='form' onSubmit={handleSubmit}>
			<FormInput data={nameOptions} />
			<FormInput data={emailOptions} />
			<FormText data={messageOptions} />

			<button
				className='form__btn'
				type='submit'
				disabled={!name || !email || !message || !enabled}
			>
				Enviar <i className='fa-solid fa-paper-plane'></i>
			</button>
		</form>
	)
}

export default Form
