import React from 'react';
import { Route, Link } from 'react-router-dom';
import { isDesktop } from '../../components/Responsive/Responsive';
import ProjectDetail from './ProjectDetail';
import ImageLoader from '../../components/ImageLoader/ImageLoader';
import data from './data';
import './Projects.css';

const PROJECTS = data;

const ProjectListItem = (props) => {
	let navStyle = props._projectNavStyle_isList ? 'list-style' : 'box-style';
	let classes = `${navStyle} project-list-item`;

	return (
		<div className={classes} onClick={props.handleClick} >
			{props._projectNavStyle_isList &&
			<div className="text monospace">
				<h4 className="project-name">{props.project.name}</h4>
				<p className="project-type">{props.project.projectType}</p>
			</div>
			}
			{!props._projectNavStyle_isList &&
			<div className="hover-image-container"> {/* !!! turn this into a component later */}
				<ImageLoader className="top-image" src={props.project.tileImg} imgKey={props.project.imgKey} />
				<ImageLoader className="bottom-image" src={props.project.heroImg} imgKey={props.project.imgKey} >
					<div className="text monospace">
						<h4 className="project-name">{props.project.name}</h4>
						<p className="project-type">{props.project.projectType}</p>
					</div>
				</ImageLoader>
			</div>
			}
			{(!props._projectNavStyle_isList && !isDesktop()) && 
				<div className="text monospace">
					<h4 className="project-name">{props.project.name}</h4>
					<p className="project-type">{props.project.projectType}</p>
				</div>
			}
		</div>
	);
}

class Projects extends React.Component {
	constructor() {
		super();
		this._handleProjectNavClick = this._handleProjectNavClick.bind(this);
	}
	componentWillUpdate() {
		if(window.location.pathname === '/projects') {
			this.props._handleProjectPageLanding();
		}
	}
	componentWillUnmount() {
	}
	_handleProjectNavClick() {
		window.scrollTo(0, 0);
		this.props._handleProjectDetailLanding();
	}
	render() {
		return (
			<div className="projects">

				<div className={`projects-nav ${this.props._projectNavStyle_isList ? 'list-style' : 'box-style'}`}>
					{ this.props._projectNavStyle_isList
						? <div className="center title monospace" onClick={this.props._toggleProjectNav} id="Menu">Menu</div>
						: null
					}
					{ this.props._isProjectNavOpen 
						? <ul className={`project-list ${this.props._projectNavStyle_isList ? 'list-style' : 'box-style'}`}>
							{ PROJECTS.map((project, index) => 
							<li key={index} >
								 <Link to={this.props.match.url + '/' + project.url} >
									<ProjectListItem 
										project={project} 
										handleClick={this._handleProjectNavClick} 
										_projectNavStyle_isList={this.props._projectNavStyle_isList}/>
								</Link>
							</li>
							) }
						</ul>
						: null
					}
				</div>

				<Route path={`${this.props.match.url}/:id`} component={(routeProps, state, params) => 
					<ProjectDetail 
						_handleProjectDetailLanding={this.props._handleProjectDetailLanding}
						_handleProjectNavClick={this._handleProjectNavClick}
						routeProps={routeProps}
					{...this.props} />} />

			</div>
		);
	}
}

export default Projects;