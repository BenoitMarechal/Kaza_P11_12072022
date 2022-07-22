import React from 'react';
import { Link } from 'react-router-dom';

const ErrorComponent = () => {
	return (
		<div className='error container'>
			<h1 className='error__h1'>404</h1>
			<p className='error__p'>
				Oups! La page que vous avez demandé n'éxiste pas
			</p>
			<Link to='/' className='error__link'>
				Retourner sur la page d'accueil
			</Link>
		</div>
	);
};

export default ErrorComponent;
