import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

function Layout() {
	const getHeight = () => `${window.innerHeight}px`
	const [height, setHeight] = useState(getHeight())

	useEffect(() => {
		// const color = getComputedStyle(
		// 	document.querySelector('.app')
		// ).backgroundColor
		const onResize = () => setHeight(getHeight())

		document
			.querySelector('meta[name="theme-color"]')
			.setAttribute('content', '#eee')

		window.addEventListener('resize', onResize)

		return () => {
			window.removeEventListener('resize', onResize)
		}
	}, [])
	return (
		<div className='app' style={{ height }}>
			<Outlet />
			<Navbar />
		</div>
	)
}

export default Layout
