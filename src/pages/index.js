import React, { Component } from 'react'

import logo from 'images/logo.svg';
import './style.css';

import PageRouter from './router'

import { auth } from 'utils/firebaseConnect'

export default class App extends Component {
	state = {
		uid: null
	}

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			if (user) {
				this.setState({uid: user.uid});
			} else {
				this.setState({uid: null});
			}
		});
	}

	componentWillUnmount () {
		this.removeListener()
	}

	handleSignOut = (e) => {
		e.preventDefault();
		auth.signOut();
	}

	render () {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" /><br/>
					{this.state.uid ? (
						<button onClick={this.handleSignOut}>Logout</button>
					) : (
						<h1 className="App-title">Not Authenticated</h1>
					)}
				</header>
				<div>
					<PageRouter auth={{uid: this.state.uid}} />
				</div>
			</div>
		)
	}
}