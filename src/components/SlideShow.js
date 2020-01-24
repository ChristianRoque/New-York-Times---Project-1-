import React, { Component } from 'react';

export default class SlideShow extends Component {
	state = {
		pictureURl: 'galaxy.gif',
		current: 0,
		articleURL: '#',
		target: ''
	};

	picturesBar = () => {
		return this.props.data.map((eachArticle, i) => {
			if (eachArticle.multimedia == null || eachArticle.multimedia.length == 0) {
				return;
			} else {
				return (
					<a key={i} href="#" className="links">
						<img
							alt={i}
							onClick={this.changeDisplay}
							className="bar-logo"
							src={eachArticle.multimedia[0].url}
						/>
					</a>
				);
			}
		});
	};

	categoryBar = () => {
		let categories =
			'arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world';
		return categories.split(', ').map((eachCategory, i) => {
			return (
				<a key={i} href="#" className="categories-link">
					<p className="categories-p" onClick={this.props.change}>
						{eachCategory}
					</p>
				</a>
			);
		});
	};

	changeDisplay = (e) => {
		console.log(e.target.alt, 'works');

		this.setState({
			pictureURl: this.props.data[e.target.alt].multimedia[0].url,
			articleURL: this.props.data[e.target.alt].url,
			title: this.props.data[e.target.alt].title,
			abstract: this.props.data[e.target.alt].abstract,
			target: 'blank',
			rendered: true
		});
	};

	onclick = () => {
		if (!this.state.rendered) {
			this.props.function();
			this.setState({
				pictureURl: this.props.data[this.state.current].multimedia[0].url,
				title: this.props.data[this.state.current].title,
				abstract: this.props.data[this.state.current].abstract
			});
		}
	};

	componentDidMount = () => {
		let wrapper = document.getElementById('wrapper');
		let topLayer = wrapper.querySelector('.top');
		let handle = wrapper.querySelector('.handle');
		let skew = 0;
		let delta = 0;

		if (wrapper.className.indexOf('skewed') != -1) {
			skew = 1000;
		}

		wrapper.addEventListener('mousemove', function(e) {
			delta = e.clientX - window.innerWidth / 2 * 0.5;

			handle.style.left = e.clientX + delta + 'px';

			topLayer.style.width = e.clientX + skew + delta + 'px';
		});
	};

	render() {
		console.log(this.props.data, 'these are the props');
		let stylePic = {
			display: `${this.props.display}`
		};
		return (
			<div>
				<div className="space flex center">
					<div className="bar-pictures-container" style={stylePic}>
						{this.picturesBar()}
					</div>
				</div>
				<div className="categories" style={stylePic}>
					{this.categoryBar()}
				</div>
				<div />

				<div className="slider">
					<div className="space" />
					<section id="wrapper" className="skewed">
						<div className="layer bottom">
							<div className="content-wrap">
								<div className="content-body">
									<h1>{this.state.title}</h1>
									<p>{this.state.abstract}</p>
								</div>

								<img src="" alt="" />
							</div>
						</div>

						<div className="layer top">
							<div className="content-wrap">
								<div className="content-body">
									<a href={this.state.articleURL} target={this.state.target}>
										<img
											id="fetch"
											src="New-York-Times-logo-removebg-preview.png"
											onClick={this.onclick}
										/>
										<img
											id="fetch-ghost"
											src="New-York-Times-logo-removebg-preview.png"
											onClick={this.onclick}
										/>
									</a>
								</div>

								<img src={this.state.pictureURl} alt="" />
							</div>
						</div>

						<div className="handle" />
					</section>
				</div>
			</div>
		);
	}
}

// document.addEventListener('DOMContentLoaded', function() {
// 	let wrapper = document.getElementById('wrapper');
// 	let topLayer = wrapper.querySelector('.top');
// 	let handle = wrapper.querySelector('.handle');
// 	let skew = 0;
// 	let delta = 0;

// 	if (wrapper.className.indexOf('skewed') != -1) {
// 		skew = 1000;
// 	}

// 	wrapper.addEventListener('mousemove', function(e) {
// 		delta = e.clientX - window.innerWidth / 2 * 0.5;

// 		handle.style.left = e.clientX + delta + 'px';

// 		topLayer.style.width = e.clientX + skew + delta + 'px';
// 	});
// });
