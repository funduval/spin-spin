import React from 'react';
import { render } from 'react-dom';
import Dashboard from '../dashboard';
import App from '../App';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Routes = () => (
	//Setting up routes
	<Router history={browserHistory}>
		<Route exact path="/" component={App} />
		<Route exact path="/dashboard" component={Dashboard} />
	</Router>
);

export default Routes;
