import { useState } from 'react'
import useTheme from '../../../store/theme/useTheme'

function FormText(props) {
	const { name, type, max, label, enabled, value, handler } = props.data
	const [counter, setCounter] = useState(false)

	const { theme } = useTheme()

	const handleChange = e => {
		const text = e.currentTarget.value

		if (text.length <= value.length || value.length < max) handler(text)
	}

	const handleStateChange = e => setCounter(!counter)

	return (
		<div className={`form__input ${theme ? 'form__input--dark' : ''}`}>
			<div className='form__container'>
				<label htmlFor={name}>{label}</label>
				{(value || counter) && <span>{max - value.length}</span>}
			</div>
			<textarea
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
			></textarea>
		</div>
	)
}

export default FormText
