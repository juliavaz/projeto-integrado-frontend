import React from 'react';
import { Switch, Route } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Deputados from './pages/deputies/Deputados';
import Partidos from './pages/parties/Partidos';
import DeputadosDetalhes from './pages/deputies/DeputadosDetalhes';
import DeputadosDespesas from './pages/deputies/DeputadosDespesas';
import PartidosDetalhes from './pages/parties/PartidosDetalhes';
import Proposicoes from './pages/propositions/Proposicoes';
import Favorites from './pages/Favorites';

function Routing() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/sobre" component={About} />
			<Route exact path="/favoritos" component={Favorites} />
			<Route exact path="/deputados" component={Deputados} />
			<Route exact path="/deputados/:id" component={DeputadosDetalhes} />
			<Route exact path="/deputados/:id/despesas" component={DeputadosDespesas} />
			<Route exact path="/partidos" component={Partidos} />
			<Route exact path="/partidos/:id" component={PartidosDetalhes} />
			<Route exact path="/proposicoes/" component={Proposicoes} />
			<Route path="**" component={NotFound} />
		</Switch>
	);
}

export default Routing;
