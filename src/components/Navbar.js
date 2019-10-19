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
						<a href="#" className="nav-link">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="nav-link">
							MediumApi
						</a>
					</li>
					<li>
						<a href="#" className="nav-link">
							Medium Website
						</a>
					</li>
					<li>
						<a href="#" className="nav-link">
							Contact Me
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
