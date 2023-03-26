import React from 'react';
import ErrorComponent from '../Components/ErrorComponent';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Error = () => {
	return (
		<div className='page'>
			<Header />
			<ErrorComponent />
			<Footer />
		</div>
	);
};

export default Error;
