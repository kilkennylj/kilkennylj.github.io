import React from 'react';
import 'react-markdown';

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
    const finFile   = await fetch('assets/finished-content.md');
    const unfinFile = await fetch('/assets/unfinished-content.md');
    
    const finContent   = await finFile.text();
    const unfinContent = await unfinFile.text();
  
    const finProjects = finContent.split('##').filter(Boolean).map(content => '##' + content.trim());
    const unfinProjects = unfinContent.split('##').filter(Boolean).map(content => '##' + content.trim());

    return {
      props: {
        finProjects,
        unfinProjects,
      },
    };
  }

export default Projects;