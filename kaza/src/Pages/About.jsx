import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import BackGroundAbout from '../assets/Background__About.png';
import LandingPic from '../Components/Landing_Pic';
import DropDown from '../Components/DropDown';

const landPIcData = {
	img: BackGroundAbout,
	title: '',
};

const dropDownData = [
	{
		title: 'Fiabilité',
		content:
			'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
	},
	{
		title: 'Respect',
		content:
			'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
	},
	{
		title: 'Service',
		content:
			"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
	},
	{
		title: 'Sécurité',
		content:
			"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
	},
];
const About = () => {
	return (
		<div className='page'>
			<Header />
			<div className='about container'>
				<LandingPic {...landPIcData} />
				{/* <DropDown {...dropDownData} /> */}
				{dropDownData.map((object) => (
					<DropDown {...object} key={dropDownData.indexOf(object)} />
				))}
			</div>
			{/* <h1>A propos</h1> */}

			<Footer />
		</div>
	);
};

export default About;
