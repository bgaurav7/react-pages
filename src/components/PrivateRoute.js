import React from 'react';
import { Route, Redirect } from 'react-router-dom'
// import { isAuthenticated } from 'utils/firebaseConnect'

//Private Routing component
function PrivateRoute({component: Component, ...rest}) {
	
	return (
		<Route
			{...rest}
			render={(props) => rest.auth.uid
			? <Component {...rest} />
			: <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
		/>
	)
}

export default PrivateRoute;
