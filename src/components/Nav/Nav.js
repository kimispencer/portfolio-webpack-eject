import React from 'react';
import { Link } from 'react-router-dom';
import { isDesktop } from '../../components/Responsive/Responsive';
import Logo from '../../assets/logos/kimi.svg';
import './Nav.css';

const NavTrigger = (props) => (
	<div className="nav-trigger" onClick={props._toggleNav}>
		<h3>|||</h3>
	</div>
)

const Nav = (props) => {
	const handle_navClick = () => {
		props._toggleNav();
	}
	const handle_navClick_Projects = () => {
		props._toggleNav();
		if(!props._isProjectNavOpen) props._toggleProjectNav();
		props._toggleProjectNavStyle_toBox();
	}

	return (
		<div className="nav-header-bar">
			<NavTrigger _toggleNav={props._toggleNav} />
			{!isDesktop() &&
				<div className="logo-container">
					<Link to="/"><img alt="logo" id="Logo" src={Logo} /></Link>
				</div>	
			}	
			<div className={`${props._isNavOpen ? 'open' : 'closed'} nav`}>
				{isDesktop() &&
					<div className="logo-container">
						<Link to="/" onClick={handle_navClick}><img alt="logo" id="Logo" src={Logo} /></Link>
					</div>	
				}	
				<ul className="nav-links">
					<Link to="/projects" onClick={handle_navClick_Projects}><li className="link-text"><small className="uppercase">Projects</small></li></Link>
					<Link to="/resume" onClick={handle_navClick}><li className="link-text"><small className="uppercase">Resume</small></li></Link>
					{/*<a href="mailto:hello@kimispencer.com"><li className="link-text"><small className="uppercase">Contact</small></li></a>*/}
					{/*<li className="link-text"><Link to="/playground" onClick={handle_navClick}><small className="uppercase">Playground</small></Link></li>*/}
					<Link to="/contact" onClick={handle_navClick}><li className="link-text"><small className="uppercase">Contact</small></li></Link>
				</ul>
			</div>
		</div>
	);
}

export default Nav;
