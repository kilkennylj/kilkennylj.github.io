import React from 'react';

import '../styles/HomePage.css';

import liamImage from "../images/liam.jpeg";

function About ()
{
    return(
        <div className="about">
            <h1 style={{display: 'block'}}>About Me</h1>
            <div className="aboutImgContainer">
                <img className="aboutImg" src={liamImage} alt='Liam Kilkenny, creator of this webpage' />
            </div>
        </div>
    );
}

export default About;
