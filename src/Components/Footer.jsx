import React from 'react';
import FooterLogo from './footerLogo';

const Footer = () => {
	return (
		<footer className='footer white-on-black'>
			<FooterLogo />
			<p className='footer__text'>&copy; 2020 Kaza, all rights reserved</p>
		</footer>
	);
};

export default Footer;
