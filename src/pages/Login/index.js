import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { FirebaseAuth } from 'react-firebaseui'
import { auth, isAuthenticated } from 'utils/firebaseConnect'
import { firebaseSignInOptions } from 'config'

const redirectKey = 'REDIRECT_KEY';
const defaultRedirectPath = '/';

export default class Login extends Component {
	uiConfig = {
		signInOptions: firebaseSignInOptions,
		callbacks: {
			signInSuccess: () => {
				console.log('Sign in successful');
				return false;
			}
		}
	};

	constructor(props) {
		super(props)

		const { from } = props.location.state || { from: { pathname: window.localStorage.getItem(redirectKey) } }

		window.localStorage.setItem(redirectKey, from.pathname);
	}

	render() {
		if (isAuthenticated()) {
			let path = window.localStorage.getItem(redirectKey);
			window.localStorage.setItem(redirectKey, defaultRedirectPath);

			return (
				<Redirect to={ {pathname: path} } />
			)
		}

		return (
			<div>
				<FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={auth} />
			</div>
		)
	}
}
