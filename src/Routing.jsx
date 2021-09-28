import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Paginas/Home';
import NotFound from './Paginas/NotFound';

function Routing() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="**" component={NotFound} />
		</Switch>
	);
}

export default Routing;
