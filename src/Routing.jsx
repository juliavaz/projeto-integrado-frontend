import React from 'react';
import { Switch, Route } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Deputados from './pages/deputies/Deputados';
import Partidos from './pages/parties/Partidos';
import DeputadosDetalhes from './pages/deputies/DeputadosDetalhes';
import PartidosDetalhes from './pages/parties/PartidosDetalhes';

function Routing() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/sobre" component={About} />
			<Route exact path="/deputados" component={Deputados} />
			<Route exact path="/deputados/:id" component={DeputadosDetalhes} />
			<Route exact path="/partidos" component={Partidos} />
			<Route exact path="/partidos/:id" component={PartidosDetalhes} />
			<Route path="**" component={NotFound} />
		</Switch>
	);
}

export default Routing;
