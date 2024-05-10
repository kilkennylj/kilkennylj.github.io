import React from 'react';

import "../styles/NavBar.css"

const NavBar = () =>
{
    return(
    <div className="navBarContainer">
        <div className="leftSide">
            <a href="/">
                Home
            </a>
        </div>
        <div className="rightSide">
            <ul>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/resume">Resume</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default NavBar;
