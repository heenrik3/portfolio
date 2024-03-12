import { useEffect } from 'react'
import Footer from '../../components/Footer'
import Generic from '../../components/Generic'

const front = ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'ReactJS', 'Responsivo']
const back = [
	{
		title: 'JavaScript',
		icon: 'fa-brands fa-square-js',
		data: [
			'NodeJS',
			'RestFUL',
			'Express',
			'Mongoose',
			'Sequelize',
			'Stripe',
			'WebSockets',
		],
	},
	{
		title: 'Java',
		icon: 'fa-brands fa-java',
		data: ['Spring Boot', 'Spark Server'],
	},
	{
		title: 'Python',
		icon: 'fa-brands fa-python',
		data: ['Flask', 'FastAPI'],
	},
	{
		title: 'Banco de Dados',
		icon: 'fa-solid fa-database',
		data: ['MongoDB', 'PostgreSQL'],
	},
]
const tools = ['Postman', 'Git', 'GitHub', 'Vercel', 'Cyclic']

function About() {
	useEffect(() => {
		document.title = 'Sobre'
	}, [])

	return (
		<Generic title='Sobre'>
			<section className='avatar'>
				<picture className='avatar__picture'>
					<img
						className='avatar__img'
						src='https://i.imgur.com/b8Lqnb5.png'
					></img>
				</picture>
			</section>

			<section className='description'>
				<h3>Olá...</h3>
				<p>
					Meu chamo Henrique e sou graduando em Análise e
					Desenvolvimento de Sistemas - UERJ.
				</p>
				<p>
					Estou dando meus primeiros passos como Desenvolvedor e nessa
					jornada de 2 anos, já acumulo conhecimentos em stacks como
					React, Javascript, NodeJS, MongoDB, Mongoose e Express
					Framework. Minha pretensão é me tornar um Desenvolvedor Web
					Full-Stack que, de alguma forma, promova algum impacto e
					também ajude a sociedade.
				</p>
				<p>
					Estou aberto a oportunidades onde possa contribuir, aprender
					e crescer. Se você acredita que tem uma oportunidade que
					seja compatível com as minhas habilidades e experiência, por
					favor entre em contato.
				</p>
			</section>

			<section className='actions'>
				<a
					href='https://www.linkedin.com/in/henrik3-dev/'
					target='_blank'
				>
					<button>
						<i className='fa-brands fa-linkedin'></i>
						<span>LinkedIn</span>
					</button>
				</a>

				<a href='https://github.com/heenrik3' target='_blank'>
					<button>
						<i className='fa-brands fa-github'></i>
						<span>GitHub</span>
					</button>
				</a>

				<a href='/resume.pdf' download={true}>
					<button>
						<i className='fa-solid fa-download'></i>
						<span>Baixar CV</span>
					</button>
				</a>
			</section>

			<h1>Habilidades</h1>
			<section className='section__card'>
				<div className='section__title'>
					<i className='fa-solid fa-wand-magic-sparkles'></i>
					<span>Front-End</span>
				</div>
				<ul className='section__list'>
					{front.map((item, i) => (
						<li className='section__chip' key={i}>
							<span>{item}</span>
						</li>
					))}
				</ul>
			</section>
			<section className='section__card'>
				<div className='section__title'>
					<i className='fa-solid fa-spaghetti-monster-flying'></i>
					<span>Back-End</span>
				</div>
				<ul className='section__list'>
					{back.map((item, i) => (
						<li className='section__chip backend__item' key={i}>
							<section>
								<i className={item.icon}></i>
								<span>{item.title}</span>
							</section>
							<ul className='section__list'>
								{item.data.map((title, i) => (
									<li key={i}>
										<span>{title}</span>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</section>

			<section className='section__card'>
				<div className='section__title'>
					<i className='fa-solid fa-screwdriver-wrench'></i>
					<span> Ferramentas</span>
				</div>
				<ul className='section__list'>
					{tools.map((item, i) => (
						<li className='section__chip' key={i}>
							<span>{item}</span>
						</li>
					))}
				</ul>
			</section>

			<Footer />
		</Generic>
	)
}

export default About
