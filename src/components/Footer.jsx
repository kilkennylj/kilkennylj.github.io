import React from 'react';

import "../styles/Footer.css"

import githubLogo from "../images/githubLogo.png";
import linkedInLogo from "../images/linkedInLogo.png";

const Footer = () =>
{
    return(
        <div className="footerContainer">
            <div className="contactInfo">
                <ul>
                    <li><img src={githubLogo} alt='GitHub' /> <a href='https://github.com/kilkennylj/'>kilkennylj</a></li>
                    <li><img src={linkedInLogo} alt='LinkedIn' /><a href='https://www.linkedin.com/in/kilkennylj/'>kilkennylj</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;