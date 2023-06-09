import React from 'react';
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <hr />
            <div className='footer'>
                <div className='social-links'>

                    <img src={Linkedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>


                <div className='logo-f'>
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className='blur blur-footer-1'></div>
            <div className='blur blur-footer-2'></div>

        </div>
    );
}

export default Footer;