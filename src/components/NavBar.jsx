import React from 'react';

import Link from 'next/link';

import "../styles/NavBar.css"

// Removing blog Link until I figure out the best course of action.
// <li>
//      <Link href="/blog">Blog</Link>
// </li>

const NavBar = () =>
{
    return(
    <div className="navBarContainer">
        <div className="leftSide">
            <Link href="/">
                Home
            </Link>
        </div>
        <div className="rightSide">
            <ul>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/resume">Resume</Link>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default NavBar;
