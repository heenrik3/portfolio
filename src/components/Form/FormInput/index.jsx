import { useState } from 'react'
import useTheme from '../../../store/theme/useTheme'

function FormInput(props) {
	const { name, type, max, label, enabled, value, handler } = props.data
	const [counter, setCounter] = useState(false)

	const { theme } = useTheme()

	const handleChange = e => {
		if (e.currentTarget.value.length <= value.length || value.length < max)
			handler(e.currentTarget.value)
	}

	const handleStateChange = e => setCounter(!counter)

	return (
		<div className={`form__input ${theme ? 'form__input--dark' : ''}`}>
			<div className='form__container'>
				<label htmlFor={name}>{label}</label>
				{(value || counter) && <span>{max - value.length}</span>}
			</div>
			<input
				id={name}
				type={type}
				onChange={handleChange}
				onFocus={handleStateChange}
				onBlur={handleStateChange}
				disabled={!enabled}
				maxLength={max}
				value={value}
				autoComplete='off'
				required
			></input>
		</div>
	)
}

export default FormInput
