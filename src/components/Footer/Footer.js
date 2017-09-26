import React, { } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import LinkedIn from '../../assets/logos/linkedin.svg';
import Github from '../../assets/logos/github.svg';

const Footer = (props) => {
	return (
		<div className="Footer">
			<a href="mailto:hello@kimispencer.com"><h4 className="monospace underline center" id="Hello">hello@kimispencer.com</h4></a>

			<div className="flex-col">
				<ul id="SocialMediaList">
					<li>
						<Link to="https://www.linkedin.com/in/kimispencer" target="_blank">
							<img alt="LinkedIn" id="LinkedIn" src={LinkedIn} />
						</Link>
					</li>
					<li>
						<Link to="https://github.com/kimispencer" target="_blank">
							<img alt="Github" id="Github" src={Github} />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;