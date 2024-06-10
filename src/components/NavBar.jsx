import React from 'react';

import { Link } from 'react-router-dom';

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
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default NavBar;
