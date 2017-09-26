import React from 'react';
import './TextAnimation.css';

const TextAnimation = (props) => {
	let copy = props.text;
	let letters = copy.split('');
	letters.map((letter, index) => {
		letters[index] = `<span class="fade-in-letter">${letter}</span>`;
		return letters[index];
	});
	let html = letters.join('');

	return (
		<div id={props.id} className={`${props.className} text-animation`}>
			<p className="fade-letter-container" dangerouslySetInnerHTML={{ __html: html }}></p>
		</div>
	);
}

export default TextAnimation;