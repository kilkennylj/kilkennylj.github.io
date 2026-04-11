import { getMarkdownContent } from '../lib/markdown';
import { processProjects } from '../lib/processProjects';
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
