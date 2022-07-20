import React from 'react';
import logo from '../assets/LOGO.png';

const Logo = () => {
	return (
		<h1 className='header__logo'>
			<img src={logo} alt='kaza header logo' className='prim-on-sec' />
		</h1>
	);
};

export default Logo;
