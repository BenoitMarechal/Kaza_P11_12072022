import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import BackGroundAbout from '../assets/Background__About.png';
import LandingPic from '../Components/Landing_Pic';
import DropDown from '../Components/DropDown';
import dropDownData from '../assets/aboutPageContent.json';
const landPIcData = {
	img: BackGroundAbout,
	title: '',
};

// faire un json pour dropDownData

const About = () => {
	return (
		<div className='page'>
			<Header />
			<div className='about container'>
				<LandingPic {...landPIcData} />
				{dropDownData.map((object) => (
					<DropDown {...object} key={dropDownData.indexOf(object)} />
				))}
			</div>

			<Footer />
		</div>
	);
};

export default About;
