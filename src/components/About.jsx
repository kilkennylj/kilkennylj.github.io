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
            <div className="aboutContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue odio tortor, sit amet hendrerit mauris dapibus quis. Praesent auctor malesuada odio. Sed lectus nibh, efficitur in mollis nec, placerat vel ligula. Proin volutpat pellentesque nisl, sed tincidunt magna. Phasellus ut urna eu erat fermentum rutrum sed in neque. Vestibulum risus ex, varius vel viverra sit amet, sagittis ornare sem. Nunc quis laoreet mi, id ultricies sem. Donec tincidunt arcu sed eros maximus finibus. Nulla posuere ornare porta. In tristique nisi sit amet nisi tincidunt hendrerit. Aenean pulvinar accumsan magna. 
            </div>
        </div>
    );
}

export default About;
