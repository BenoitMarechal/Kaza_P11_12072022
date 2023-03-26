// import Header() from './Header.js';
import React from 'react';
import Logo from './headerLogo';
import Nav from './Nav';

function Header() {
	return (
		// Header
		<header className='header'>
			<Logo />
			<Nav />
		</header>
	);
}

export default Header;
