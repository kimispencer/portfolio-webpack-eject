import React from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from '../../components/ImageLoader/ImageLoader';
import TextContainer from '../../components/TextContainer/TextContainer';
import TextAnimation from '../../components/TextAnimation/TextAnimation';
import './Home.css';

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<ImageLoader className="hero" imgKey={'homepage'} src={'cool-pool-pineapple_4460x4460.jpg'} alt="Hero Image">
					<div className="svg-container">		
						<svg id="TopSVG" className="svg-obj" width="600" version="1.1" x="0px" y="0px"
							 viewBox="0 0 600 169">
						<g>
							<path className="path" d="M166.7,24.5v64.4l30.1-31.3H225l-32.8,31.9l36.5,55h-28.9l-23.9-38.8l-9.2,8.9v29.9h-23.9v-120H166.7z"/>
							<path className="path" d="M237.7,44.2V24.5h23.9v19.7H237.7z M261.6,57.6v86.9h-23.9V57.6H261.6z"/>
							<path className="path" d="M303.6,57.6v11.8h0.3c3.1-4.5,6.9-8,11.3-10.4c4.4-2.5,9.5-3.7,15.2-3.7c5.5,0,10.5,1.1,15,3.2c4.5,2.1,8,5.9,10.3,11.3
								c2.6-3.8,6.1-7.2,10.5-10.1c4.4-2.9,9.7-4.4,15.7-4.4c4.6,0,8.8,0.6,12.8,1.7c3.9,1.1,7.3,2.9,10.1,5.4c2.8,2.5,5,5.7,6.6,9.7
								c1.6,4,2.4,8.8,2.4,14.4v58.1H390V95.3c0-2.9-0.1-5.7-0.3-8.2c-0.2-2.6-0.8-4.8-1.8-6.7c-1-1.9-2.5-3.4-4.5-4.5
								c-2-1.1-4.6-1.7-8-1.7c-3.4,0-6.1,0.6-8.2,1.9c-2.1,1.3-3.7,3-4.9,5c-1.2,2.1-2,4.4-2.4,7.1c-0.4,2.6-0.6,5.3-0.6,8v48.4h-23.9
								V95.8c0-2.6-0.1-5.1-0.2-7.6s-0.6-4.8-1.4-7c-0.8-2.1-2.2-3.8-4.2-5.1c-2-1.3-4.8-1.9-8.7-1.9c-1.1,0-2.6,0.3-4.5,0.8
								c-1.8,0.5-3.6,1.5-5.4,2.9c-1.7,1.4-3.2,3.4-4.5,6c-1.2,2.6-1.8,6.1-1.8,10.3v50.4h-23.9V57.6H303.6z"/>
							<path className="path" d="M433.3,44.2V24.5h23.9v19.7H433.3z M457.2,57.6v86.9h-23.9V57.6H457.2z"/>
						</g>
						</svg>
						<svg id="BottomSVG" className="svg-obj" width="600" version="1.1" x="0px" y="0px"
							 viewBox="0 0 600 169">
						<g>
							<path className="path" d="M166.7,24.5v64.4l30.1-31.3H225l-32.8,31.9l36.5,55h-28.9l-23.9-38.8l-9.2,8.9v29.9h-23.9v-120H166.7z"/>
							<path className="path" d="M237.7,44.2V24.5h23.9v19.7H237.7z M261.6,57.6v86.9h-23.9V57.6H261.6z"/>
							<path className="path" d="M303.6,57.6v11.8h0.3c3.1-4.5,6.9-8,11.3-10.4c4.4-2.5,9.5-3.7,15.2-3.7c5.5,0,10.5,1.1,15,3.2c4.5,2.1,8,5.9,10.3,11.3
								c2.6-3.8,6.1-7.2,10.5-10.1c4.4-2.9,9.7-4.4,15.7-4.4c4.6,0,8.8,0.6,12.8,1.7c3.9,1.1,7.3,2.9,10.1,5.4c2.8,2.5,5,5.7,6.6,9.7
								c1.6,4,2.4,8.8,2.4,14.4v58.1H390V95.3c0-2.9-0.1-5.7-0.3-8.2c-0.2-2.6-0.8-4.8-1.8-6.7c-1-1.9-2.5-3.4-4.5-4.5
								c-2-1.1-4.6-1.7-8-1.7c-3.4,0-6.1,0.6-8.2,1.9c-2.1,1.3-3.7,3-4.9,5c-1.2,2.1-2,4.4-2.4,7.1c-0.4,2.6-0.6,5.3-0.6,8v48.4h-23.9
								V95.8c0-2.6-0.1-5.1-0.2-7.6s-0.6-4.8-1.4-7c-0.8-2.1-2.2-3.8-4.2-5.1c-2-1.3-4.8-1.9-8.7-1.9c-1.1,0-2.6,0.3-4.5,0.8
								c-1.8,0.5-3.6,1.5-5.4,2.9c-1.7,1.4-3.2,3.4-4.5,6c-1.2,2.6-1.8,6.1-1.8,10.3v50.4h-23.9V57.6H303.6z"/>
							<path className="path" d="M433.3,44.2V24.5h23.9v19.7H433.3z M457.2,57.6v86.9h-23.9V57.6H457.2z"/>
						</g>
						</svg>
					</div>
					<Link to="/projects" onClick={this.props._handleProjectPageLanding}>
						<TextContainer>
							<TextAnimation className="subtitle" text="Hi, I'm Kimi. I'm an engineer & designer." />
								<TextAnimation id="ShowMeMore" className="link-text uppercase" text="show me more" />
						</TextContainer>
					</Link>
				</ImageLoader>
			</div>
		);
	}
}
export default Home;