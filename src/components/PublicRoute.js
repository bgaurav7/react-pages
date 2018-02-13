import React from 'react';
import { Route } from 'react-router-dom'

//Private Routing component
function PublicRoute({component: Component, ...rest}) {
	return (
		<Route
			{...rest}
			render={(props) => (
				<Component {...rest} />
			)}
		/>
	)
}

export default PublicRoute;
