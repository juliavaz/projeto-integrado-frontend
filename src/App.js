import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import PrimeReact from 'primereact/api';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import NavBar from './Componentes/NavBar';
import SideMenu from './Componentes/SideMenu';

function App() {
	PrimeReact.ripple = true;

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<div id="mainContainer">
					<SideMenu />
					<div id="contentContainer">
						<Routing />
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
