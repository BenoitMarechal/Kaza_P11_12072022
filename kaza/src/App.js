import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import About from './Pages/About';
import Logding from './Pages/Logding';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/lodging/*' element={<Logding />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
