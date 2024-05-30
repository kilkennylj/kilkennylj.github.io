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
                The projects page also has projects I am currently working on, and as I get along with them, I will post progress pictures of how they are going.
            </p>
            <p>
                The resume page is simple, but I will introduce it to stay consistent.
                The page displays my up-to-date resume in a large viewport so you can read it without downloading.
                And, of course, you can download my resume to have a copy.
            </p>
            <p>
                The blog page has the most unique design of all of the pages.
                I implemented hygraph and graphql to make it work.
                It has blog posts from the beginning of development, making it an excellent website history and a perspective into my present ideas and challenges.
                It is updated with a new blog post every Sunday.
            </p>
        </div>
    );
};

export default HomeContent;
