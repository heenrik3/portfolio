import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({})

function ThemeProvider(props) {
	const themes = ['', 'dark']
	const [theme, setTheme] = useState('')

	useEffect(() => {
		const handleSystemThemeChanged = ({ matches }) =>
			setTheme(themes[+matches])

		const scheme = window.matchMedia('(prefers-color-scheme: dark)')

		setTheme(themes[+scheme.matches])

		scheme.addEventListener('change', handleSystemThemeChanged)

		return () => {
			scheme.removeEventListener('change', handleSystemThemeChanged)
		}
	}, [])

	const context = {
		theme,
	}

	return (
		<ThemeContext.Provider value={context}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
