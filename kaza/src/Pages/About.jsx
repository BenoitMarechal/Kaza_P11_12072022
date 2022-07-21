import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import BackGroundAbout from '../assets/Background__About.png';
import LandingPic from '../Components/Landing_Pic';

const landPIcData = {
	img: BackGroundAbout,
	title: '',
};

const About = () => {
	return (
		<div className='page'>
			<Header />
			<div className='about container'>
				<LandingPic {...landPIcData} />
			</div>
			{/* <h1>A propos</h1> */}
			<Footer />
		</div>
	);
};

export default About;
