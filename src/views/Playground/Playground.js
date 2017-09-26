import React from 'react';
import ParticleTypography from '../../components/ParticleTypography/ParticleTypography';
import './Playground.css';

class Playground extends React.Component {
	componentDidMount() {
		new ParticleTypography(document.getElementById('Canvas'));
	}
	render() {
		return (
			<div className="playground">
				<canvas id="Canvas" />
			</div>
		);
	}
}

export default Playground;