import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className='header__nav'>
			<ul className='header__nav__ul'>
				<li>
					<NavLink to='/'>Accueil</NavLink>
				</li>
				<li>
					<NavLink to='/about'>A propos</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
