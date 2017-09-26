import React from 'react';
import { isDesktop } from '../../components/Responsive/Responsive';
import ParticleTypography from '../../components/ParticleTypography/ParticleTypography';
import './Contact.css';

export default  class Contact extends React.Component {
    componentDidMount() {
        if(isDesktop()) {
            new ParticleTypography(document.getElementById('Canvas'));            
        }
    }
    render() {
        return (
            <div className="contact">
                <div className="text center">
                    <h3 className="title bold">Let's make cool things together!</h3>
                    <a href="mailto:hello@kimispencer.com"><h4 className="monospace underline" id="Hello">hello@kimispencer.com</h4></a>
                </div>
                {isDesktop() &&
                    <canvas id="Canvas" />
                }
                {/*
                <div id="ContactForm" className="flex-center flex-col">
                    <form>
                        <div className="flex-col">
                            <input id="Name" type="text" placeholder="Your Name" />
                            <input id="Email" type="email" placeholder="Your Email" />
                            <textarea id="Message" placeholder="Your Message"></textarea>
                            <button type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
                */}
            </div>
        );
    }
}