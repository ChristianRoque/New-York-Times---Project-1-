import React, { Component } from 'react';
import styled from 'styled-components';

export default class Navbarr extends Component {
	render() {
		const Link = styled.div`
			color: white;
			display: flex;
			:hover {
				color: black;
				background: white;
				transition: 0.7s;
			}
		`;
		const divStyle = {
			display: `${this.props.display}`
		};
		return (
			<div className="navbar flex " style={divStyle}>
				<div className="logo logo-container">
					<img className=" logo-pic logo" src="new-york-times.png" />
				</div>

				<ul>
					<li>
						<a href="https://developer.nytimes.com/" target="blank" className="nav-link">
							New York API
						</a>
					</li>
					<li>
						<a href="https://github.com/ChristianRoque" target="blank" className="nav-link">
							Github
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
