import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import data from '../assets/logements.json';
import Carroussel from '../Components/Carroussel';
import ErrorComponent from '../Components/ErrorComponent';
import Description from '../Components/Description';

const Logding = () => {
	let pageId = new URLSearchParams(window.location.search).get('id');
	const found = data.find((element) => element.id === pageId);

	return (
		<div className='page'>
			<Header />
			{found ? (
				<div className='lodging container prim-on-sec'>
					{found.pictures ? <Carroussel {...found} /> : <h2>pas de photos</h2>}
					<Description {...found} />
				</div>
			) : (
				<ErrorComponent />
			)}

			<Footer />
		</div>
	);
};

export default Logding;
