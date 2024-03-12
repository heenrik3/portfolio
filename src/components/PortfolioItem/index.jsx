import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import back from '../../assets/back.png'

function PortfolioItem(props) {
	const { data } = props

	const img = useRef()

	useEffect(() => {
		const loader = (entries, observer) => {
			const [entry] = entries

			if (!entry.isIntersecting) return

			const image = entry.target
			image.src = data.img

			image.addEventListener('load', () => image.classList.remove('lazy'))

			observer.unobserve(image)
		}

		const obs = new IntersectionObserver(loader, {
			root: null,
			threshold: 0,
		})

		obs.observe(img.current)
	}, [])

	return (
		<Link to={`/portfolio/${data.slug}`}>
			<section className='portfolio__item'>
				<picture className='portfolio__picture'>
					<img
						className='portfolio__img lazy'
						src={back}
						ref={img}
					></img>
				</picture>

				<div className='portfolio__info'>{data.title}</div>
			</section>
		</Link>
	)
}

export default PortfolioItem
