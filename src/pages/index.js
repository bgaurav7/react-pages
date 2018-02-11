import React, { Component } from 'react'

import logo from 'images/logo.svg';
import './style.css';

import PageRouter from './router'

import { auth, setLoggedIn, setLoggedOut, isAuthenticated, signOut } from 'utils/firebaseConnect'

export default class App extends Component {
	state = {
		uid: null
	}

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			if (user) {
				setLoggedIn(user);
				this.setState({uid: user.uid});
			} else {
				setLoggedOut();
				this.setState({uid: null});
			}
		});
	}

	componentWillUnmount () {
		this.removeListener()
	}

	handleSignOut = (e) => {
		e.preventDefault();
		signOut();
	}

	render () {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" /><br/>
					{isAuthenticated() ? (
						<button onClick={this.handleSignOut}>Logout</button>
					) : (
						<h1 className="App-title">Not Authenticated</h1>
					)}
				</header>
				<div>
					<PageRouter />
				</div>
			</div>
		)
	}
}