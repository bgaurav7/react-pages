import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import PrivateRoute from 'components/PrivateRoute'

const Loading = () => <div>Loading...</div>;

const NotFoundPage = Loadable({
	loader: () => import('./NotFound'),
	loading: Loading,
});

const LoginPage = Loadable({
	loader: () => import('./Login'),
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

const PageRouter = props => {
	return(
		<BrowserRouter>
			<div>
				<nav className="navbar navbar-default navbar-static-top">
					<div className="container">
					<ul className="nav navbar-nav pull-right">
						<li>
							<Link to="/" className="navbar-brand">Home</Link>
						</li>
						<li>
							<Link to="/test" className="navbar-brand">Test Page</Link>
						</li>
					</ul>
					</div>
				</nav>
				<Switch>
					<Route path='/' exact component={HomePage} />
					<PrivateRoute path='/test' component={TestPage} />
					<Route path='/login' state={ {from: '/'} } component={LoginPage} />
					<Route path='*' component={NotFoundPage} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default PageRouter;
