import React from 'react';
import { Switch, Route } from 'react-router';
import About from './pages/About';
import Deputados from './pages/deputies/Deputados';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function Routing() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/sobre" component={About} />
			<Route exact path="/deputados" component={Deputados} />
			<Route path="**" component={NotFound} />
		</Switch>
	);
}

export default Routing;
