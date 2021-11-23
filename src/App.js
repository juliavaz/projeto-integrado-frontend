import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PrimeReact from 'primereact/api';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import SideMenu from './components/SideMenu2';

function App() {
	PrimeReact.ripple = true;


	const closeMenus = () => {
		setShowSideMenu(false);
	};

	const [showSideMenu, setShowSideMenu] = useState(true);

	return (
		<div className="App">
			<BrowserRouter>
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
