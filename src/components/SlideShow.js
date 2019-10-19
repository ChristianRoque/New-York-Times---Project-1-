import React, { Component } from 'react';
import axios from 'axios';

export default class SlideShow extends Component {
	picturesBar = () => {
		return this.props.data.map((eachArticle, i) => {
			if (eachArticle.multimedia.length == 0) {
				return;
			} else {
				return (
					<a key={i} href="#" className="links">
						<img className="bar-logo" src={eachArticle.multimedia[0].url} />
					</a>
				);
			}
		});
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
		console.log(this.props.display, 'these are the props');
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

				<div className="slider">
					<div className="space" />
					<section id="wrapper" className="skewed">
						<div className="layer bottom">
							<div className="content-wrap">
								<div className="content-body">
									<h1>Look Sharp</h1>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero accusantium facere
										unde temporibus sequi aut quod excepturi, blanditiis reiciendis possimus.
									</p>
								</div>

								<img src="" alt="" />
							</div>
						</div>

						<div className="layer top">
							<div className="content-wrap">
								<div className="content-body">
									<a href="#">
										<img
											id="fetch"
											src="New-York-Times-logo-removebg-preview.png"
											onClick={this.picturesBar}
										/>
										<img
											id="fetch-ghost"
											src="New-York-Times-logo-removebg-preview.png"
											onClick={this.picturesBar}
										/>
									</a>
								</div>

								<img src="galaxy.gif" alt="" />
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
