import React from 'react';

import '../styles/HomePage.css';

function HomeContent()
{
    return(
        <div className="homeContent">
            <h1 style={{display: 'block', textAlign: 'center'}}>Welcome</h1>
            <p>
                Welcome to my personal portfolio website!
                On this website, I want to show you my goals and how I am accomplishing them on the Projects page, what I have done with my resume on the Resume page, and what my thoughts are about what I am learning on the Blog page.
            </p>
            <p>
                I created the projects page to discuss each project and the obstacles I overcame while making them.
                This page includes projects I created as part of a school project, like Turntable, and personal projects I have developed, like this website.
            </p>
        </div>
    );
};

export default HomeContent;
