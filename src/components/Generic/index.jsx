function Generic(props) {
	return (
		<div className='layout'>
			<div className='layout__header'>
				<header>
					<div className='layout__title'>
						<div>
							<h4>{props.title}</h4>
						</div>
					</div>
				</header>
			</div>

			<div className='layout__content'>
				<div className='layout__page'>{props.children}</div>
			</div>
		</div>
	)
}

export default Generic
