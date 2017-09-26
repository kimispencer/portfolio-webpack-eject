import React, { Component } from 'react';

import './ScrollBar.css';

// const ScrollBar = () => {
// 	return(
// 		<progress id="ScrollProgress" max="100" value="0"></progress>
// 	);
// }

class ScrollBar extends Component {
	// constructor() {
	// 	super();
	// }
	componentDidMount() {
		this._setMax();
	}
	componentDidUpdate() {
		this._setMax();
		window.addEventListener('scroll', this._handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this._handleScroll);
	}
	_setMax() {
		let height = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
			document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
		// document.getElementById('ScrollProgress').max = (height - window.innerHeight);
		this.refs.ScrollProgress.max = (height - window.innerHeight);
	}
	_handleScroll() {
		let scrollTop = window.pageYOffset | document.body.scrollTop;
		document.getElementById('ScrollProgress').value = scrollTop;		
		// this.refs.ScrollProgress.value = scrollTop;					// !!! why can't I use refs here?
	}
	render() {
		return(
			<progress ref="ScrollProgress" id="ScrollProgress" max="100" value="0"></progress>
		);
	}
}

export default ScrollBar;