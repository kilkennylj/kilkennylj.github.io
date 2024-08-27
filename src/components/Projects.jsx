import React from 'react';

import ProjectCard from './ProjectCard';

import '../styles/ProjectsPage.css';

const Projects = ({ finProjects, unfinProjects }) =>
{
    return(
        <div className="projectContainer">
            <div className="content">
                <h1>Finished Projects</h1>
                { finProjects.map((project, index) => (<ProjectCard content={project} key={index} />)) }
            </div>
            <div className="content">
                <h1>Projects in Progress</h1>
                { unfinProjects.map((project, index) => (<ProjectCard content={project} key={index} />)) }
            </div>
        </div>
    );
}

export default Projects;