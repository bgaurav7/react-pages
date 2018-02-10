import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const NotFoundPage = Loadable({
	loader: () => import('./NotFound'),
	loading: Loading,
});

const HomePage = Loadable({
	loader: () => import('./Home'),
	loading: Loading,
});

const TestPage = Loadable({
	loader: () => import('./Test'),
	loading: Loading,
});

const PageRouter = props => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={HomePage}/>
			<Route path='/test' component={TestPage}/>
			<Route path='*' component={NotFoundPage}/>
		</Switch>
	</BrowserRouter>
)

export default PageRouter;
