import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import data from '../assets/logements.json';

const Home = () => {
	return (
		<div className='page'>
			<Header />
			<h1>Home</h1>
			{data &&
				data.map((elt) => {
					return <div key={elt.id}>{elt.title}</div>;
				})}

			<Footer />
		</div>
	);
};

export default Home;
