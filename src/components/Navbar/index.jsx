import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
	const { pathname } = useLocation()

	const data = [
		{
			path: '/sobre',
			icon: 'fa-solid fa-user',
		},
		{
			path: '/portfolio',
			icon: 'fa-solid fa-book-open',
		},
		{
			path: '/contato',
			icon: 'fa-solid fa-envelope-open-text',
		},
	]

	// <i className='fa-solid fa-envelope-open-text'></i>

	useEffect(() => {}, [pathname])

	if (pathname === '/') return null

	return (
		<nav className='navbar'>
			<ul className='navbar__list'>
				{data.map((item, i) => (
					<Link className='navbar__link' to={item.path} key={i}>
						<li
							className={`navbar__item ${
								item.path === pathname ||
								pathname.includes(item.path)
									? 'active'
									: ''
							}`}
						>
							<i className={item.icon}></i>
						</li>
					</Link>
				))}
			</ul>
		</nav>
	)
}

export default Navbar

{
	/* <Link className='navbar__link' to={'/sobre'}>
					<li className='navbar__item'>
						<i className='fa-solid fa-user'></i>
					</li>
				</Link>

				<Link className='navbar__link' to={'/portfolio'}>
					<li className='navbar__item'>
						<i className='fa-solid fa-book-open'></i>
					</li>
				</Link>

				<Link className='navbar__link' to={'/contato'}>
					<li className='navbar__item'>
						<i className='fa-solid fa-paper-plane'></i>
					</li>
				</Link> */
}
