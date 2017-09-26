import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
// libraries
import smoothScroll from 'smoothscroll';
import ScrollToTopRoute from './components/ScrollToTopRoute/ScrollToTopRoute';

// components
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import ScrollBar from './components/ScrollBar/ScrollBar';
import Shroud from './components/Shroud/Shroud';

import Home from './views/Home/Home';
import Projects from './views/Projects/Projects';
import Resume from './views/Resume/Resume';
import Contact from './views/Contact/Contact';
import Playground from './views/Playground/Playground';

// css
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			_isNavOpen: false,
			_isProjectNavOpen: true,
			_projectNavStyle_isList: false,
			width: null,
			height: null
		}
		this._updateDimensions = this._updateDimensions.bind(this);
		this._toggleNav = this._toggleNav.bind(this);
		this._toggleProjectNav = this._toggleProjectNav.bind(this);
		this._toggleProjectNavStyle = this._toggleProjectNavStyle.bind(this);
		this._toggleProjectNavStyle_toBox = this._toggleProjectNavStyle_toBox.bind(this);
		this._toggleProjectNavStyle_toList = this._toggleProjectNavStyle_toList.bind(this);
		this._smoothScroll = this._smoothScroll.bind(this);
		this._handleProjectPageLanding= this._handleProjectPageLanding.bind(this);
		this._handleProjectDetailLanding = this._handleProjectDetailLanding.bind(this);
		/* testing */
		this._sayHi = this._sayHi.bind(this);
	}
	componentWillMount() {
		this._updateDimensions();
	}
	/* 
		* componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. 
		* If you need to load data from a remote endpoint, this is a good place to instantiate the network request. 
		* Setting state in this method will trigger a re-rendering.
	*/
	componentDidMount() {
		window.addEventListener("resize", this._updateDimensions);
	}
	/*
		* componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
		* Use this as an opportunity to operate on the DOM when the component has been updated. 
		* This is also a good place to do network requests as long as you compare the current props to previous props 
		* (e.g. a network request may not be necessary if the props have not changed). 
	*/
	componentDidUpdate() {
	}
	/*
		* componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. 
		* Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any 
		* DOM elements that were created in componentDidMount
	*/
	componentWillUnmount() {
		window.removeEventListener("resize", this._updateDimensions);
	}
    _updateDimensions() {
		var w = window,
			d = document,
			documentElement = d.documentElement,
			body = d.getElementsByTagName('body')[0],
			width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
			height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

			this.setState({width: width, height: height});
    }
	_smoothScroll(loc) {
		smoothScroll(loc);
	}
	_toggleNav() {
		this.setState(prevState => ({
			_isNavOpen: !prevState._isNavOpen,
		}));
	}
	_toggleProjectNav() {
		this.setState(prevState => ({
			_isProjectNavOpen: !prevState._isProjectNavOpen,
		}));
	}
	_toggleProjectNavStyle() {
		this.setState(prevState => ({
			_projectNavStyle_isList: !prevState._projectNavStyle_isList,
		}));
	}
	_toggleProjectNavStyle_toBox() {
		this.setState({
			_projectNavStyle_isList: false
		});
	}
	_toggleProjectNavStyle_toList() {
		this.setState({
			_projectNavStyle_isList: true
		});
	}
	_handleProjectPageLanding() {
		this.setState(prevState => ({
			_isProjectNavOpen: true,
			_projectNavStyle_isList: false,
		}));
	}
	_handleProjectDetailLanding() {
		this.setState(prevState => ({
			_isProjectNavOpen: false,
			_projectNavStyle_isList: true,
		}));

		// !!! NOTE -- use react-responsive and make this a global var
		let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		/* breakpoint 769px */
		if(width > 768) {
			this.setState(prevState => ({
				_isProjectNavOpen: true,
			}));
		}
	}
	_sayHi() {
		console.log('hi')
	}
	render() {
		return(
			<div className="App">
				<Router>
				<div>
					<ScrollBar />
					<Nav 
						_isNavOpen={this.state._isNavOpen} 
						_toggleNav={this._toggleNav} 
						_isProjectNavOpen={this.state._isProjectNavOpen} 
						_toggleProjectNav={this._toggleProjectNav} 
						_toggleProjectNavStyle_toBox={this._toggleProjectNavStyle_toBox} />
					<div className="main-content">
						<ScrollToTopRoute exact path="/" component={(props, state, params) => 
							<Home
								_handleProjectPageLanding={this._handleProjectPageLanding}
							{...props} />} />
						<ScrollToTopRoute path="/projects" component={(props, state, params) => 
							<Projects 
								_toggleProjectNavStyle={this._toggleProjectNavStyle} 
								_toggleProjectNavStyle_toList={this._toggleProjectNavStyle_toList}
								_projectNavStyle_isList={this.state._projectNavStyle_isList} 
								_toggleProjectNav={this._toggleProjectNav}
								_isProjectNavOpen={this.state._isProjectNavOpen} 
								_handleProjectPageLanding={this._handleProjectPageLanding}
								_handleProjectDetailLanding={this._handleProjectDetailLanding}
							{...props} />} />
						<ScrollToTopRoute path="/resume" component={Resume}/>
						<ScrollToTopRoute path="/playground" component={Playground}/>
						<ScrollToTopRoute path="/contact" component={Contact}/>
					</div>
					<Shroud handleClick={this._toggleNav} _isNavOpen={this.state._isNavOpen} />
					<Footer />
				</div>
				</Router>
			</div>
		);
	}
}
export default App;