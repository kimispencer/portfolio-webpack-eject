/*
	* kimispencer.com
	* July 6, 2017
*/

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// var Locations = require('./components/Locations.jsx');

// ReactDOM.render(
//   <Locations />,
//   document.getElementById('Root')
// );


import React from 'react';
import ReactDOM from 'react-dom';

import './styles/reset.css';

import App from './App';

ReactDOM.render(
	<App />,
	document.getElementById('Root')
);

/*
	**** how to pass Component props via a Route

	<Route path="/projects" component={ProjectList} />
	vs.
	// create a stateless component that is wrapping the ProjectList component
	<Route path="/projects" component={(props, state, params) => <ProjectList _isNavOpen={this.state._isNavOpen} {...props} />} />

	

	**** sample code for different ways of declaring a component

	// 1. I use this syntax when my component fits on one line

	const ListItem = (props) => <li className="list-item">{props.item.name}</li>;



	// 2. I use this when my component has no logic outside JSX
	// !!! does not use 'props' when you have ({ items }) vs (props) -> props.items

	const List = ({ items }) => (
	  <ul className="list">
	    {items.map(item => <ListItem item={item} />)}
	  </ul>
	);



	// 3. I use this when the component needs logic outside JSX.

	const Body = (props) => {
	  let items = transformItems(props.rawItems);
	  return (
	    <div>
	      <h1>{props.header}</h1>
	      <List items={items} />
	    </div>
	  );
	};



	// 4. This is equivalent to the last example but using ES5
	function Page(props, context) {
	  return (
	    <div>
	      <Body header="My List" rawItems={props.rawItems} />
	    </div>
	  );
	}



	// 5. propTypes and contextTypes are supported

	Page.propTypes = {
	  rawItems: React.PropTypes.array.isRequired,
	};



	// 6. ES6 class
	// !!! uses this.props inside render()

	class App extends Component {
		constructor(props) {
			super(props);
			this.myFunction = this.myFunction.bind(this);	// need to bind functions
		}
		myFunction() {
	
		}
		render() {
			return(

			);
		}
	}
*/
