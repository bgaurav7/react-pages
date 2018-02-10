import React, { Component } from 'react'

import logo from './images/logo.svg';
import './style.css';

import PageRouter from './pages/router'

export default class App extends Component {
	render () {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React Pages</h1>
				</header>
				<div>
					<PageRouter />
				</div>
			</div>
		)
	}
}