import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import me from '../assets/me.jpg';
import linkedin from '../assets/linkedin.jpg';
import whatsapp from '../assets/whatsapp.jpg';

import './styles/about.scss';


export class AboutMe extends Component {
    constructor() {
        super();
        this.state = {
            facebook: '',
            linkedin: '',
            whatsapp: ''
        }
    }

    componentDidMount() {
        this.setState({
            facebook: 'https://www.facebook.com/emanuel.sanga.37604/',
            whatsapp: '0738749926',
            linkedin: 'https://www.linkedin.com/in/emanuel-sanga-b9b3b7b8/'
        })
    }

    render() {
        return (
            <div className={`about-container`}>
                <div className="about-text">
                    About Me
                </div>
                <div className="account-row">
                    <div className={`image-carrier`}>
                        <img src={me} alt="me"/>
                    </div>
                </div>
                <div className="accounts">
                    <div className={`facebook`}>
                        <div className="page">
                            <div className={`image-carrier`}>
                                <img src={me} alt="facebook"/>
                            </div>
                            <div className="content">
                                <div>
                                    <a target={`_blank`}  href={this.state.facebook}>Emanuel Sanga</a>
                                </div>
                                <div className={`bottom-text`}>
                                    Facebook Account
                                </div>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </div>
                    <div className={`linkedin`}>
                        <div className="page">
                            <div className={`image-carrier`}>
                                <img src={linkedin} alt="facebook"/>
                            </div>
                            <div className={`content`}>
                                <div>
                                    <a target={`_blank`} href={this.state.linkedin}>Emanuel Sanga</a>
                                </div>
                                <div className={`bottom-text`}>
                                    Linkedin Account
                                </div>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </div>
                    <div className={`whatsapp`}>
                        <div className="page">
                            <div className={`image-carrier`}>
                                <img src={whatsapp} style={{height: 100 + '%'}} alt="facebook"/>
                            </div>
                            <div className={`content`}>
                                <div>
                                    <div>{this.state.whatsapp}</div>
                                </div>
                                <div className={`bottom-text`}>
                                    Whatsapp Account
                                </div>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faWhatsapp}/>
                    </div>
                </div>
            </div>
        );
    }

}
