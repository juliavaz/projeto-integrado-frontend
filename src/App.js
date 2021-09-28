import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { useState } from 'react';
import PrimeReact from 'primereact/api';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import NavBar from './Componentes/NavBar';
import SideMenu from './Componentes/SideMenu';

function App() {
	PrimeReact.ripple = true;

	const toggleSideMenu = () => {
		setShowSideMenu(!showSideMenu);
	};

	const closeMenus = () => {
		setShowSideMenu(false);
	};

	const [showSideMenu, setShowSideMenu] = useState(true);

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar toggleSideMenu={toggleSideMenu} />
				<div id="mainContainer">
					<SideMenu showSideMenu={showSideMenu} closeMenus={closeMenus} />
					<div id="contentContainer">
						<Routing />
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
