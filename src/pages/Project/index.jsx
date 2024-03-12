import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../components/Footer'

function Project() {
	const { id } = useParams()

	const [project, setProject] = useState()

	useEffect(() => {
		fetch(import.meta.env.VITE_API + '/portfolio/' + id)
			.then(res => res.json())
			.then(({ data }) => setProject(data))
	}, [id])

	if (!project)
		return (
			<div className='project'>
				<div className='project__content'>
					<Link className='project__btn' to='/portfolio'>
						<i className='fa-solid fa-caret-left'></i>{' '}
						<span>Voltar</span>
					</Link>

					<div className='skeleton'>&nbsp;</div>
					<div className='skeleton'>&nbsp;</div>
					<div className='skeleton'>&nbsp;</div>
					<div className='skeleton'>&nbsp;</div>
					<div className='skeleton'>&nbsp;</div>
					<Footer />
				</div>
			</div>
		)

	return (
		<div className='project'>
			<div className='project__content'>
				<Link className='project__btn' to='/portfolio'>
					<i className='fa-solid fa-caret-left'></i>{' '}
					<span>Voltar</span>
				</Link>

				<picture className='project__picture'>
					<img className='project__img' src={project.img}></img>
				</picture>
				<h1>{project.title}</h1>

				{project.overview.length > 1 ? (
					<section className='section__card'>
						<div className='section__title'>
							<i className='fa-regular fa-file-lines'></i>

							<span>Descrição</span>
						</div>
						{project.overview.map((d, i) => (
							<p key={i}>{d}</p>
						))}
					</section>
				) : null}

				<section className='section__card'>
					<div className='section__title'>
						<i className='fa-solid fa-toolbox'></i>

						<span>Ferramentas Usadas</span>
					</div>

					<ul className='section__list'>
						{project.tools.map((t, i) => (
							<li className='section__chip' key={i}>
								{t}
							</li>
						))}
					</ul>
				</section>

				<a className='project__btn' href={project.url} target='_blank'>
					Ver Projeto
					<i className='fa-solid fa-caret-right'></i>
				</a>

				<Footer />
			</div>
		</div>
	)
}

export default Project
