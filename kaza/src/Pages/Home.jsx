import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import data from '../assets/logements.json';
import LandingPic from '../Components/Landing_Pic';
import background__accueil from '../assets/Background__Accueil.png';
import LodgingCard from '../Components/LodgingCard';

const landPIcData = {
	img: background__accueil,
	title: 'Chez vous, partout et ailleurs',
};

const Home = () => {
	return (
		<div className='page'>
			<Header />
			<div className='home container'>
				<LandingPic {...landPIcData} />
				<section className='lodgingCards'>
					{data &&
						data.map((elt) => {
							return <LodgingCard key={elt.id} {...elt} />;
						})}
				</section>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
