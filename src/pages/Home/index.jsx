import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
	useEffect(() => {
		document.title = 'Início'
	}, [])
	return (
		<header className='header'>
			<div className='hero'>
				<h1>Henrique</h1>
				<h1>Desenvolvedor.</h1>
				<h1>Web.</h1>
			</div>

			<div>
				<Link to={'/sobre'}>
					<button>
						Começar <i className='fa-solid fa-chevron-right'></i>
					</button>
				</Link>
			</div>
		</header>
	)
}

export default Home
