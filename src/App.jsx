import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import ThemeProvider from './store/theme/context'
import './style/main.sass'

const router = createBrowserRouter([
	{
		Component: Layout,
		children: [
			{
				path: '/',
				Component: Home,
			},
			{
				path: '/sobre',
				Component: About,
			},
			{
				path: '/portfolio/*',
				children: [
					{
						index: true,
						Component: Portfolio,
					},
					{
						path: ':id',
						Component: Project,
					},
				],
			},
			{
				path: '/contato',
				Component: Contact,
			},
		],
	},
	{
		path: '*',
		Component: NotFound,
	},
])

function App() {
	return (
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
