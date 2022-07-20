import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import About from './Pages/About';
//import { useState, useEffect } from 'react';

//const dataUrl = './assets/logements.json';

// useEffect(() => {
// 	fetch(dataUrl)
// 		 .then((response) => response.json()
// 		 .then(({ surveyData }) => console.log(surveyData))
// 		 .catch((error) => console.log(error))
// 	 )
//  }, [])
// let rawData = {};
// async function getData() {
// 	let rep = await fetch(dataUrl);
// 	//console.log('hey');
// 	console.log(rep);
// 	rawData = await rep.json();
// 	console.log(rawData);
// }
// getData();

// function getData() {
// 	fetch(dataUrl)
// 		.then((reponse) => reponse.json())
// 		.then((responseData) => {
// 			console.log(responseData);
// 		});
// 	//return ()
// }

const App = () => {
	// useEffect(() => {
	//getData();
	// }, []);
	//ajouter "A propos"
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/error' element={<Error />} />
				<Route path='*' element={<Error />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
