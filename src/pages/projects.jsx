import React from 'react';

import remarkHtml from 'remark-html';

import { getMarkdownContent } from '../lib/markdown';
import Projects from '../components/Projects';

const ProjectsPage = ({ finProjects, unfinProjects }) =>
{
    finProjects   = processProjects(finProjects);
    unfinProjects = processProjects(unfinProjects);

    return(
    <div className="pageContainer">
        <Projects finProjects={finProjects} unfinProjects={unfinProjects}/>
    </div>
    );
}

function processProjects(projects)
{
    let showdown = require('showdown');
    let converter = new showdown.Converter();
    
    for (let i = 0; i < projects.length; i++)
      projects[i] = converter.makeHtml(projects[i]);

    return projects;
}

export async function getStaticProps() {
    const finProjects   = await getMarkdownContent('finished-projects.md');
    const unfinProjects = await getMarkdownContent('unfinished-projects.md');
    
    return {
      props: {
        finProjects,
        unfinProjects,
      },
    };
}

export default ProjectsPage;
