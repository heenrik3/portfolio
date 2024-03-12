import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Generic from '../../components/Generic'
import Form from '../../components/Form'
import Footer from '../../components/Footer'

function Contact() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [submitting, setSubmitting] = useState(false)

	useEffect(() => {
		document.title = 'Contato'
	}, [])

	const handleSubmit = () => {
		const id = toast.loading('Enviando...')

		setSubmitting(true)

		fetch(import.meta.env.VITE_API + '/portfolio/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				message,
			}),
		})
			.then(res => res.json())
			.then(data => {
				setSubmitting(false)

				if (data) {
					setName('')
					setEmail('')
					setMessage('')

					toast.success('Enviado!', { id })
				} else {
					toast.error('Erro ao enviar!', { id })
					console.log(err)
					console.clear()
				}
			})
			.catch(() => {
				setSubmitting(false)

				toast.error('Envio não permitido.', { id })
			})
	}

	const form_data = {
		name,
		setName,
		email,
		setEmail,
		message,
		setMessage,
		handler: handleSubmit,
		enabled: !submitting,
	}

	return (
		<Generic title='Contato'>
			<Form data={form_data} />
			<Footer />
			<Toaster />
		</Generic>
	)
}

export default Contact
