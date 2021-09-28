import React from 'react';
import { Switch, Route } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function Routing() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/notfound" component={NotFound} />
			<Route path="**" component={NotFound} />
		</Switch>
	);
}

export default Routing;
