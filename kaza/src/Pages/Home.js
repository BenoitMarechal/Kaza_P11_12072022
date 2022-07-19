import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import data from '../assets/logements.json';

const Home = () => {
	return (
		<div>
			<h1>HOME</h1>
			<Header />

			{data &&
				data.map((elt) => {
					return <div key={elt.id}>{elt.title}</div>;
				})}

			<Footer />
		</div>
	);
};

export default Home;
