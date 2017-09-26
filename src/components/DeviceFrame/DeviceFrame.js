import React from 'react';
import ImageLoader from '../ImageLoader/ImageLoader';
import './DeviceFrame.css';

class DeviceFrame extends React.Component {
	constructor() {
		super();
		this.state = {
			inViewport: false
		}
		this._isElementInView = this._isElementInView.bind(this);
		this._handleScroll = this._handleScroll.bind(this);
	}
	componentDidMount() {
		window.addEventListener('scroll', this._handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this._handleScroll);
	}
	_isElementInView (el) {
		var rect = el[0].getBoundingClientRect();
		var height = window.innerHeight
			|| document.documentElement.clientHeight
			|| document.body.clientHeight;
		// return (rect.top>-1 && rect.bottom <= height);	// is in viewport
		return (rect.top + rect.height/2 < height);			// is 1/2 way above fold
	}
	_handleScroll() {
		if(this._isElementInView(document.getElementsByClassName('device-frame'))) {
			this.setState({ inViewport: true });
		}
	}
	render() {
		return (
			<div className={`device-frame ${this.props.className} ${this.state.inViewport ? 'in-viewport' : ''}`}>
				{this.props.type === "desktop" && 
				<div className="macbook">
					<div className="screen">
						<div className="viewport">
							<ImageLoader className="screenshot" src={this.props.src} imgKey={this.props.imgKey} isBg={false} />
						</div>
					</div>
					<div className="base"></div>
					<div className="notch"></div>
				</div>
				}
				{this.props.type === "phone" && 
				<div className="iphone">
					<div className="content">
						<div className="iphone-top">
							<span className="camera"></span>
							<span className="sensor"></span>
							<span className="speaker"></span>
						</div>
						<div className="iphone-screen">
							<ImageLoader className="screenshot" src={this.props.src} imgKey={this.props.imgKey} isBg={false} />
						</div>
						<div className="buttons">
							<span className="on-off"></span>
							<span className="sleep"></span>
							<span className="up"></span>
							<span className="down"></span>
						</div>
						<div className="iphone-bottom">
							<span></span>
						</div>
					</div>
				</div>
			}
			</div>
		);
	}
}
export default DeviceFrame;