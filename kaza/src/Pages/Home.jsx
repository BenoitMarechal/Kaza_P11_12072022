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
				{/* <img src={background__accueil} alt='kjhkjh' /> */}
				<LandingPic {...landPIcData} />

				{/* {data &&
					data.map((elt) => {
						return <div key={elt.id}>{elt.title}</div>;
					})} */}
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
