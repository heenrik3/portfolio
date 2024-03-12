import { useEffect, useState } from 'react'
import Spinner from '../../components/Spinner'
import Footer from '../../components/Footer'
import PortfolioItem from '../../components/PortfolioItem'
import Generic from '../../components/Generic'

function Portfolio() {
	const [portfolio, setPortfolio] = useState()

	const element = portfolio ? (
		<>
			{portfolio.map((item, i) => (
				<PortfolioItem data={item} key={i} />
			))}
		</>
	) : (
		Array.from({ length: 5 }, (_, index) => (
			<li key={index} className='portfolio__item--skeleton'>
				<picture></picture>
				<div>&nbsp;</div>
			</li>
		))
	)

	useEffect(() => {
		document.title = 'Portfólio'

		fetch(import.meta.env.VITE_API + '/portfolio')
			.then(res => res.json())
			.then(data => {
				setPortfolio(data.data)
			})
	}, [])

	return (
		<Generic title='Portfólio'>
			<div className='portfolio'>
				<ul className='portfolio__list'>{element}</ul>
			</div>
			<Footer />
		</Generic>
	)
}

export default Portfolio
