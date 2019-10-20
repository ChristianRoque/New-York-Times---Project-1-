import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SlideShow from './components/SlideShow';
import axios from 'axios';

import React, { Component } from 'react';

export default class App extends Component {
	state = {
		display: 'none',
		category: 'science'
	};
	componentWillMount = () => {
		axios
			.get(
				`https://api.nytimes.com/svc/topstories/v2/science.json?q=person&api-key=BvqS8W96aazmsaOtCxkvUOxEImk19Cla`
			)
			.then((data) => {
				this.setState({
					results: data.data.results
				});
			});
	};

	changeCategory = (e) => {
		console.log(e.target);
		let category = e.target.innerText;
		axios
			.get(
				`https://api.nytimes.com/svc/topstories/v2/${category}.json?q=person&api-key=BvqS8W96aazmsaOtCxkvUOxEImk19Cla`
			)
			.then((data) => {
				this.setState({
					results: data.data.results
				});
			});
	};

	changeDisplay = () => {
		this.setState({
			display: ''
		});
	};

	render() {
		if (!this.state.results) {
			return <div>Loading</div>;
		}
		return (
			<div className="App">
				<Navbar display={this.state.display} />
				<SlideShow
					data={this.state.results}
					display={this.state.display}
					function={this.changeDisplay}
					change={this.changeCategory}
				/>
			</div>
		);
	}
}
