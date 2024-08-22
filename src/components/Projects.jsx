import React from 'react';
import { getMarkdownContent } from '../lib/markdown';

import ProjectCard from './ProjectCard';

import '../styles/ProjectsPage.css';

const Projects = ({ finProjects, unfinProjects }) =>
{
    console.log(finProjects)

    return(
        <div className="projectContainer">
            <div className="content">
                <h1>Finished Projects</h1>
                { finProjects.map((project, index) => (<ProjectCard content={project} key={index} />)) }
            </div>
            <div className="content">
                <h1>Unfinished Projects</h1>
                { unfinProjects.map((project, index) => (<ProjectCard content={project} key={index} />)) }
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const finProjects   = await getMarkdownContent('/assets/finished-projects.md');
    const unfinProjects = await getMarkdownContent('/assets/unfinished-projects.md');
    
    return {
      props: {
        finProjects,
        unfinProjects,
      },
    };
}

export default Projects;