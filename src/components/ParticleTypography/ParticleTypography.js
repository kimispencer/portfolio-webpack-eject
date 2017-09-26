import Ball from './Ball';
import utils from './utils';
import TestImage from '../../assets/icons/triangle.svg';

export default class ParticleTypography {
	/**
		* Setup DOM references and event listeners
	*/
	constructor(canvas) {
		this.canvas 					= canvas;
		this.ctx 						= this.canvas.getContext('2d');

		this.utils 						= window.utils;
	    this.requestAnimationFrame		= window.requestAnimationFrame.bind(window);

		this.mouse 						= this.utils.captureMouse(this.canvas);
		this.mouseBall 					= new Ball(40, 'transparent');

		this.image       				= new Image();
		this.imageSrc   				=  TestImage; //"https://s3-us-west-2.amazonaws.com/s.cdpn.io/3640/leila-jade.v3.png";;
		this.imagePixels 				= [];

		this.particles    				= [];
		this.hueTopRange 				= 280;
		this.hueBotRange 				= 200;
		this.hueOffset   				= 60;

		this.particleSize				= 2;
		this.step 						= 4;

		// Set particle size based on screensize
		// this.particleSize = 0;
		// if (this.utils.screenSize().width > 1200){
		// 	this.particleSize = 8;
		// } else if (this.utils.screenSize().width > 900) {
		// 	this.particleSize = 6;
		// } else {
		// 	this.particleSize = 4;
		// }

		// Environment Physics
		this.spring   = 0.1;
		this.friction = 0.95;

	    // Start animation
		this._init();
	}

	/**
		* Initialize canvas and image
	*/
    _init() {
		// Set Canvas size to fullscreen
		let w = 500;
		this.ctx.canvas.width  = w > this.utils.screenSize().width ? this.utils.screenSize().width : w;
		this.ctx.canvas.height = w/2; 

		// Environment events
		// w.addEventListener('resize', () => this._onWindowResize());
		this.ctx.canvas.addEventListener('mousemove', () => this._onMouseMove(), false);

		// CORS enabled image
		// https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
		this.image.crossOrigin = "Anonymous";
		this.image.src         = this.imageSrc;
		this.image.addEventListener('load', () => this._drawImage());
		// debugging
		// this.ctx.drawImage(this.image, 100, 100);

		// start the animation
		this._animate();
    }

	/**
		* Draw image to canvas (in-memory)
	*/
	_drawImage() {
		// Create in-memory canvas to get image pixels
		let analysisCanvas  = document.createElement('canvas'),
		    analysisContext = analysisCanvas.getContext('2d');

		analysisCanvas.width  = this.ctx.canvas.width;
		analysisCanvas.height = this.ctx.canvas.height;

		// Get image proportions
		let ratio       = this.image.width / this.image.height,
		    imageWidth  = this.ctx.canvas.width,
		    imageHeight = imageWidth / ratio;

		// If image is portrait, swap proportion ratio
		if (imageHeight > this.ctx.canvas.height) {
			imageHeight = this.ctx.canvas.height;
			imageWidth  = imageHeight * ratio;
		}

		// Scale image down so there's some padding
		imageHeight *= 0.9;
		imageWidth  *= 0.9;

		let verticalCenter   = (this.ctx.canvas.height - imageHeight) / 2,
		    horizontalCenter = (this.ctx.canvas.width - imageWidth) / 2;

		// Draw image to canvas and center it
		analysisContext.clearRect(0, 0, analysisCanvas.width, analysisCanvas.height);
		analysisContext.drawImage(this.image, horizontalCenter, verticalCenter, imageWidth, imageHeight);

		this._getPixelData(analysisCanvas, analysisContext);
    }

	/**
		* Create image pixel map with x, y, and color properties
		* for individual pixels
		*
		* @param {Object} canvas - Canvas element
		* @param {Object} context - 2D canvas context
	*/
	_getPixelData(canvas, context) {
		// Get canvas pixel data
		let imageData = context.getImageData(0, 0, this.ctx.canvas.width, this.ctx.canvas.height),
			pixels    = imageData.data,
			x         = 0,
			y         = 0;

		// Iterate over canvas pixels
		for (let index = 0; index < pixels.length; index += 4){
			let r = pixels[index],
			g = pixels[index + 1],
			b = pixels[index + 2],
			a = pixels[index + 3];

			// Skip transparent or all-white pixels
			if (a > 0 && !(r === 255 && g === 255 && b === 255)){
				let x = (index / 4) % this.ctx.canvas.width,
					y = Math.floor((index / 4) / this.ctx.canvas.width);

				// 
		        if (x % this.step || y % this.step) {
		            continue;
		        }

				if((x && x % this.particleSize === 0) && (y && y % this.particleSize === 0)){
					this.imagePixels.push({ 
						x: x, 
						y: y, 
						color: 'rgba('+ r + ', ' + g + ', ' + b + ', ' + a + ')'
					});
				}
			}
		}
		this._generateParticles(this.imagePixels);
	}
	/**
		* Generate particles
		*
		* @param {Array} pixels - Canvas pixel coordinates
	*/
	_generateParticles(pixels) {
		for (let i = 0; i < pixels.length; i++){
			let particle = new Ball(
				this.particleSize, // size
				pixels[i].color,  // color
			);
			particle.x = Math.random() * (this.ctx.canvas.width - 0) + 0;
			particle.y = Math.random() * (this.ctx.canvas.height - 0) + 0;

			particle.targetX = pixels[i].x;
			particle.targetY = pixels[i].y;

			this.particles.push(particle);
		}
		return this.particles;
    }
	/**
		* Draw particles
		*
		* @param {Object} particle - Instance 2D Ball context
	*/
	_drawParticles(particle) {
		// particle.range = (this.image.height - particle.y);
		// Set hue based on Y coordinate (vertical)
		// let hue = ( ( particle.range * (this.hueTopRange - this.hueBotRange) ) / ( this.image.height) ) + this.hueOffset;
		// particle.color = 'hsla(' + hue + ', 88%, 63%, 1.00)';

		// white hue
		// particle.color = 'hsla(360, 100%, 100%, 1)';
		// black hue
		particle.color = 'hsla(0, 0%, 0%, 1)';

		particle.draw(this.ctx);
	}
	_updateParticles(particle) {
		// Get distance to target
		let dx = (particle.targetX - particle.x),
			dy = (particle.targetY - particle.y);

		// Calculate acceleration (distance * spring)
		particle.ax += dx * this.spring;
		particle.ay += dy * this.spring;

		// Calculate velocity (acceleration + distance)
		particle.vx += particle.ax;
		particle.vy += particle.ay;

		// Apply friction (velocity * friction)
		particle.vx *= this.friction;
		particle.vy *= this.friction;

		// Add velocity to positioning
		particle.x += particle.vx;
		particle.y += particle.vy;

		// clear out acceleration each cycle
		particle.ax *= 0;
		particle.ay *= 0;
	}
	/**
		* Animation loop
	*/
	_animate() {
		// Call request animation frame recursively
		this.requestAnimationFrame(this._animate.bind(this), this.canvas);

		// Clear canvas every frame
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

		// Animate stuff...
		if (this.particles){
			for (var i = 0; i < this.particles.length; i++){
				this._collisionDetection(this.particles[i]);
				this._updateParticles(this.particles[i]);
				this._drawParticles(this.particles[i]);
			}
		}
    }
	/** 
		* Mouse move callback
	*/
	_onMouseMove() {
		// Set mouseBall to mouse coordinates
		this.mouseBall.x = this.mouse.x;
		this.mouseBall.y = this.mouse.y;
    }
	/**
		* Collision detection between mouse and particles
		*
		* @param {Object} particle - Instance 2D Ball context
	*/
	_collisionDetection(particle) {
		let dx   = particle.x - this.mouseBall.x,
			dy   = particle.y - this.mouseBall.y,
			dist = Math.sqrt( ( dx * dx ) + ( dy * dy ) ),
			min_dist = particle.radius + this.mouseBall.radius;

		if (dist < min_dist){
			let angle = Math.atan2( dy, dx ),
				tx    = this.mouseBall.x + Math.cos(angle) * min_dist,
				ty    = this.mouseBall.y + Math.sin(angle) * min_dist;

			particle.vx += (tx - particle.targetX) * this.spring;
			particle.vy += (ty - particle.targetY) * this.spring;
		}
	}
}