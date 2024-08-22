import React from 'react';

import { getMarkdownContent } from '../lib/markdown';
import Projects from '../components/Projects';

const ProjectsPage = ({ finProjects, unfinProjects }) =>
{
    return(
    <div className="pageContainer">
        <Projects finProjects={finProjects} unfinProjects={unfinProjects}/>
    </div>
    );
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
