import React from 'react';
import './Shroud.css';

const Shroud = (props) => {
	let show = props._isNavOpen ? 'show' : 'hide';
	let cssClasses = `${show} Shroud`;
	return (
		<div className={cssClasses} onClick={props.handleClick}></div>
	);
}

export default Shroud;